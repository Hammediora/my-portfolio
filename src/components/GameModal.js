import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Modal, Button, Typography, TextField, Box } from '@mui/material';

const GameModal = ({ isOpen, closeModal }) => {
    const [codeSnippet, setCodeSnippet] = useState('');
    const [userInput, setUserInput] = useState('');
    const [gameResult, setGameResult] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [attempts, setAttempts] = useState(0); // Track the number of attempts

    const codeSnippets = useMemo(() => [
        { snippet: `public static void main(String[] args) { System.out.println("____"); }`, answer: 'Hello, World!' },
        { snippet: `print("____")`, answer: 'Hello, World!' },
        { snippet: `console.log("____");`, answer: 'Hello, World!' },
        { snippet: `def greet():\n    print("____")`, answer: 'Hello, World!' },
        { snippet: `echo "____";`, answer: 'Hello, World!' }, // PHP
        { snippet: `let message = "____";`, answer: 'Hello, World!' }, // JavaScript
        { snippet: `printf("____");`, answer: 'Hello, World!' }, // C
        { snippet: `System.out.println("____");`, answer: 'Hello, World!' }, // Java
    ], []); // Memoize the array to prevent re-creation on each render

    const startGame = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * codeSnippets.length);
        const selectedSnippet = codeSnippets[randomIndex];
        setCodeSnippet(selectedSnippet.snippet);
        setCurrentAnswer(selectedSnippet.answer);
        setUserInput('');
        setGameResult('');
        setAttempts(0); // Reset attempts
    }, [codeSnippets]);

    useEffect(() => {
        if (isOpen) {
            startGame(); // Start a new game when the modal opens
        }
    }, [isOpen, startGame]);

    const checkAnswer = () => {
        setAttempts(attempts + 1);
        if (userInput.trim() === currentAnswer) {
            setGameResult('Correct!');
        } else {
            setGameResult('Wrong! Try Again.');
            if (attempts >= 2) {
                setGameResult(`The correct answer is: ${currentAnswer}`);
            }
        }
    };

    return (
        <Modal open={isOpen} onClose={closeModal}>
            <Box sx={{ padding: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Complete the Code Snippet
                </Typography>
                <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '4px', whiteSpace: 'pre-wrap', width: '100%' }}>
                    {codeSnippet}
                </pre>
                <TextField
                    variant="outlined"
                    label="Your Answer"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Typography variant="body2" color="textSecondary" align="center">
                    {userInput.length} / {currentAnswer.length} characters
                </Typography>
                <Box display="flex" justifyContent="space-between" width="100%" mt={2}>
                    <Button variant="contained" color="primary" onClick={checkAnswer}>
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={startGame} style={{ marginLeft: '10px' }}>
                        Play Again
                    </Button>
                </Box>
                <Typography variant="h6" mt={2} align="center">{gameResult}</Typography>
            </Box>
        </Modal>
    );
};

export default GameModal;

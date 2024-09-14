// src/components/GameModal.js
import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Button, Typography, TextField, Box, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { getNewQuote, checkUserGuess } from './GameLogic';
import './GameModal.css';

const GameModal = ({ isOpen, closeModal }) => {
  const [quote, setQuote] = useState('');
  const [hint, setHint] = useState('');
  const [userInput, setUserInput] = useState('');
  const [gameResult, setGameResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const startGame = useCallback(() => {
    setIsLoading(true);
    const { newQuote, newHint } = getNewQuote();
    setQuote(newQuote);
    setHint(newHint);
    setUserInput('');
    setGameResult('');
    setAttempts(0);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      startGame(); 
    }
  }, [isOpen, startGame]);

  const handleCheckAnswer = () => {
    setAttempts(attempts + 1);
    const result = checkUserGuess(userInput, quote);
    if (result.correct) {
      setScore(score + 1);
      setGameResult('🎉 Correct! Great job!');
    } else if (attempts >= 2) {
      setGameResult(`The correct answer was: "${quote}".`);
    } else {
      setGameResult('😕 Incorrect. Try again!');
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal} >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',  
        }}
      >
        <Box
          sx={{
            position: 'relative', 
            padding: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            width: 700,
            boxShadow: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Close Button */}
          <IconButton
            aria-label="close"
            onClick={closeModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.500',
            }}
          >
            <CloseIcon />
          </IconButton>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Guess the Famous Quote
            </Typography>

            {isLoading ? (
              <CircularProgress />
            ) : (
              <>
            <Typography variant="body1" align="center" gutterBottom>
              Hint: <strong>{hint}</strong>
            </Typography>
            <TextField
              variant="outlined"
              label="Your Guess"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Box display="flex" justifyContent="space-between" width="100%" mt={2}>
              <Button variant="contained" color="primary" onClick={handleCheckAnswer}>
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={startGame}>
                Next Quote
              </Button>
            </Box>
            <Typography variant="h6" mt={2} align="center">
              {gameResult}
            </Typography>
            <Typography variant="body2" align="center">
              Your Score: {score}
            </Typography>
            </>
            )}
          </motion.div>
        </Box>
      </Box>
    </Modal>
  );
};

export default GameModal;

// src/components/GameLogic.js
import quotes from './Quotes';

// Get a new random quote and its hint
export const getNewQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  return { newQuote: selectedQuote.quote, newHint: selectedQuote.hint };
};

// Check if the user's guess is correct
export const checkUserGuess = (input, correctAnswer) => {
  const normalizedInput = input.trim().toLowerCase();
  const normalizedAnswer = correctAnswer.toLowerCase();
  const isCorrect = normalizedInput === normalizedAnswer;
  return { correct: isCorrect };
};

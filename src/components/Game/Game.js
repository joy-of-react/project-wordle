import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    setGuesses((prev) => [...prev, guess]);
  }

  function isGameWon() {
    return guesses.some((guess) => guess === answer);
  }

  function isGameOver() {
    return isGameWon() || guesses.length === NUM_OF_GUESSES_ALLOWED;
  }

  return (
    <>
      {isGameOver() && <GameOverBanner isGameWon={isGameWon} numOfGuesses={guesses.length} answer={answer} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isGameOver={isGameOver} />
    </>
  );
}

export default Game;

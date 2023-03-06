import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameLostBanner from '../GameLostBanner';
import GameWonBanner from '../GameWonBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses((prev) => [...prev, guess]);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus === 'lost' && <GameLostBanner answer={answer} />}
      {gameStatus === 'won' && <GameWonBanner numOfGuesses={guesses.length} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;

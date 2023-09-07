import React from 'react';

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [checks, setChecks] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  console.info(answer);

  function handleAddGuess(proposedGuess) {
    const check = checkGuess(proposedGuess, answer);
    const allChecks = checks.concat(check);
    setChecks(allChecks);
    const guess = {word: proposedGuess.toUpperCase(), guessCheck: check, checks: checks}
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.word.toUpperCase() === answer) {
      setGameStatus('won');
    }
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleRestart() {
    setGuesses([]);
    setChecks([]);
    setGameStatus('running');
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GuessInput
        handleAddGuess={handleAddGuess}
        gameStatus={gameStatus}
      />
      <Keyboard
        guesses={guesses}
        checks={checks}
        answer={answer}
      />
      {gameStatus === 'won' && (
        <WonBanner 
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner 
          answer={answer}
          handleRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;

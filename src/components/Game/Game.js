import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [guesses, setGuesses] = React.useState([]);

  // Possible game statuses: running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');

  // Function to handle adding a guess and updating game status
  const handleAddGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleRestart = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  };

  // Generate an array of arrays of objects that represent the
  // status of each guess (state dependent so will update as guesses updates)
  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      {/* Display the results of the user's guesses */}
      <GuessResults guesses={guesses} answer={answer} />

      {/* Render the input form, with gameStatus to handle game state */}
      <GuessInput
        gameStatus={gameStatus}
        handleAddGuess={handleAddGuess}
      />

      {/* Render the virtual keyboard with letter statuses */}
      <Keyboard validatedGuesses={validatedGuesses} />

      {/* Conditionally display a winning or losing banner */}
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;

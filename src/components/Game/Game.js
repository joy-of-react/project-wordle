import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ userGuesses, setUserGuesses ] = React.useState([]);

  function handleAddNewGuess(guess) {
    // Add the guess to the list of guesses.
    setUserGuesses([ ...userGuesses, guess ]);
  }

  return (
    <>
      <div className="guess-results">
        {userGuesses.map((guess, index) => (
          <p className="guess" key={index}>
            {guess}
          </p>
        ))}
      </div>
      <GuessInput onAddNewGuess={handleAddNewGuess} />
    </>
  );
}

export default Game;

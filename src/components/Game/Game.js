import React from 'react';
import { range, sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);

  function handleAddNewGuess(guess) {
    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    setUserGuesses([...userGuesses, newGuess]);
  }

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => (
          <Guess className="guess" key={userGuesses[index]?.id} userGuess={userGuesses[index]?.guess} />
        ))}
      </div>
      <GuessInput onAddNewGuess={handleAddNewGuess} />
    </>
  );
}

export default Game;

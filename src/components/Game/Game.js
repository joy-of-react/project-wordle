import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addGuess = (newGuess) => {
    setGuesses([...guesses, newGuess]);
  }
  return <div className='wrapper'>
    <GuessResults guesses={guesses} />
    <GuessForm addGuess={addGuess} disabled={guesses.length === NUM_OF_GUESSES_ALLOWED} />
  </div>;
}

export default Game;

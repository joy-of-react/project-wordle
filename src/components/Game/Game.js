import React, { useState } from 'react';

import { sample, range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';

import Input from '../Input';
import Results from '../Results';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
const defaultGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map(() => '');
function Game() {
  const [guesses, setGuesses] = useState(defaultGuesses);
  const [numGuesses, setNumGuesses] = useState(0);
  console.log('guesses', { guesses });
  return (
    <>
      <Results guesses={ guesses } />
      <Input
        guesses={guesses}
        setGuesses={setGuesses}
        numGuesses={numGuesses}
        setNumGuesses={setNumGuesses}
      />
    </>
  );
}

export default Game;

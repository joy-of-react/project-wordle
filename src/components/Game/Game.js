import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Input from '../Input';
import Results from '../Results';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  return (
    <>
      <Input guesses={guesses} setGuesses={setGuesses} />
      {guesses.length > 0 && <Results guesses={ guesses} />}
    </>
  );
}

export default Game;

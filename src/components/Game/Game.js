import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import PreviousWord from '../PreviousWord/PreviousWord';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = useState([]);

  const handleSaveWord = (input) => {
    setWords([...words, input]);
  };

  return (
    <>
      <PreviousWord words={words} />
      <Input handleSaveWord={handleSaveWord} />
    </>
  );
}

export default Game;

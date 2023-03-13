import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from './../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// Using arrow functions as that is what I tend to use personally / professionally.
// Also, using as a way to track files I touch - maybe helpful, maybe not
const Game = () => {
  const [guess, setGuess] = useState('');

  const handleGuess = (e) => {
    const { value } = e.target;
    setGuess(value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ guess });
    setGuess('');
  };

  return (
    <>
      <GuessInput guess={guess} handleGuess={handleGuess} handleSubmit={handleSubmit} />
    </>
  );
};

export default Game;

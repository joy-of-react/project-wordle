import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessesList from '../GuessesList/GuessesList';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleAddGuess () {
    const newGuess = {label, }
  } 



  return <>
    <GuessesList handleAddGuess={handleAddGuess} />
    <GuessInput />

  </>;
}

export default Game;

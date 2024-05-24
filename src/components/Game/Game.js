import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import AllGuesses from '../AllGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList , setGuessList] = React.useState([]);
  
  function handleGuessList(guess) {
    let newGuess = {guess, key: `${guess} - ${Math.random()}`};
    let newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);
  }

  return (
    <>
    <AllGuesses guessList={guessList} answer={answer}/>
    <GuessInput handleGuessList={handleGuessList}/>
    </>
  )
}

export default Game;

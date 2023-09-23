import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Form from '../Form/Form'
import Guess from '../Guess/guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [inputs, setInputs] = React.useState([]);

  function handleGuessSubmit(guess){
    const newGuess = [...inputs, guess]    
    setInputs(newGuess);
  }

  return (
  <>
      <Guess inputs={inputs} answer={answer}/>
      <Form handleGuessSubmit = {handleGuessSubmit}/>   
  </>
  );
}

export default Game;

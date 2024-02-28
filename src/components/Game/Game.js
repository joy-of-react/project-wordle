import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../input/Input.js'
import History from '../History/History.js'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
    const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }
 
  return <>
      <History guesses={guesses}/>
      <Input handleSubmitGuess={handleSubmitGuess}/>
  </>;
}

export default Game;

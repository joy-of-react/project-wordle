import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function checkCorrectAnswer(checkedGuess) {
  return checkedGuess.map(({status}) => status).every( s => s === 'correct')
}
function Input({
  guesses,
  setGuesses,
  numGuesses,
  setNumGuesses,
  answer,
  setGameOverStatus
}) {
  const [guess, setGuess] = useState('');
  function handleOnSubmit(e) {
    e.preventDefault();
    
    const checkedGuess = checkGuess(guess, answer);
    const gotIt = checkCorrectAnswer(checkedGuess);
    
    const newGuesses = [...guesses];
    const newNumGuesses = numGuesses + 1;
    newGuesses[numGuesses] = checkedGuess;
    setGuesses(newGuesses);
    setNumGuesses(newNumGuesses);
    setGuess('');
    if (newNumGuesses === NUM_OF_GUESSES_ALLOWED) { 
      return setGameOverStatus('sad');
    }
    
    if(gotIt) {
      setGameOverStatus('happy');
    }
  }
  return (
    <form 
      onSubmit={(e) => handleOnSubmit(e)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input 
        type="text"
        value={guess}
        onChange={(e) => setGuess((e.target.value).toUpperCase())}
        pattern="[A-Z]{5}"
        maxLength={5}
      />
    </form>
  );
}

export default Input;

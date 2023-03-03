import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Input({ guesses, setGuesses, numGuesses, setNumGuesses }) {
  const [guess, setGuess] = useState('');
  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('guess: ', { guess });
    if (numGuesses === NUM_OF_GUESSES_ALLOWED) { 
      return alert(`Already made ${NUM_OF_GUESSES_ALLOWED} guesses`);
    }
    const newGuesses = [...guesses];
    const newNumGuesses = numGuesses + 1;
    newGuesses[numGuesses] = guess;
    setGuesses(newGuesses);
    setNumGuesses(newNumGuesses);
    setGuess('');
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

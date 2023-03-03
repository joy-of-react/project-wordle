import React, { useState } from "react";

function Input({ guesses, setGuesses }) {
  const [guess, setGuess] = useState('');
  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('guess: ', { guess });
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
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
      />
    </form>
  );
}

export default Input;

import React from "react";

function GuessField({ guess, setGuess, previousGuesses, setPreviousGuesses }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        const currentGuesses = [...previousGuesses, guess];
        setPreviousGuesses(currentGuesses);
        setGuess("");
      }}
    >
      <label>Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern={".{5,5}"}
        title="Input field must have 5 characters"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessField;

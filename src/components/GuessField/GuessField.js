import React, { useState } from "react";

function GuessField({ handleSubmitGuesses, isGameOver }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isGameOver.isGameOver) {
      return;
    }
    handleSubmitGuesses(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern={".{5,5}"}
        disabled={isGameOver.isGameOver}
        title="Input field must have 5 characters"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessField;

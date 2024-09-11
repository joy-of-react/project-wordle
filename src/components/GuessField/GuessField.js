import React, { useState } from "react";

function GuessField({ handleSubmitGuesses }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuesses(guess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
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

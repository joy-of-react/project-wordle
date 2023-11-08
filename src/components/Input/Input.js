import React, { useState } from "react";

function Input({handleSubmitGuess}) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  function handleInputChange(e) {
    const nextGuess = e.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        id="guess-input"
        onChange={(e) => handleInputChange(e)}
        type="text"
        title="Input must be up to 5 characters"
        pattern=".{1,5}"
      />
    </form>
  );
}

export default Input;

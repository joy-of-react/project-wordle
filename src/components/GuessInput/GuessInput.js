import React, { useState } from "react";

const GuessInput = () => {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    if (guess.length !== 5) {
      return;
    }
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const updatedValue = event.target.value.toUpperCase();
          setGuess(updatedValue);
        }}
      ></input>
    </form>
  );
};

export default GuessInput;

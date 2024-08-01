import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const uppercasedGuess = guess.toUpperCase();
    setGuess(uppercasedGuess)
    console.log({guess: uppercasedGuess});
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        style={{textTransform: "uppercase"}}
        onChange={(event) => {
          const nextGuess = event.target.value;
          setGuess(nextGuess);
        }}
        value={guess}
      />
    </form>
  );
}

export default GuessInput;

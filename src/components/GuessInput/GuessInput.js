import React, { useState } from "react";

function GuessInput({ disabled, guessList, setGuessList }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuessList([...guessList, guess]);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">
        Enter guess:
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="[a-zA-Z]{5}"
          title="5 letter guess"
          required
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
          disabled={disabled}
        />
      </label>
    </form>
  );
}

export default GuessInput;

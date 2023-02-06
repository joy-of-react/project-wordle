import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">
        Enter guess:
        <input
          id="guess-input"
          type="text"
          value={guess}
          minLength="5"
          maxLength="5"
          required
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </label>
    </form>
  );
}

export default GuessInput;

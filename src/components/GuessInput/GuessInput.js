import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  return (
    <form>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;

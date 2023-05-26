import React from "react";

function GuessInput({ onSubmit, hasEnded }) {
  const [guess, setGuess] = React.useState([]);
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ id: crypto.randomUUID(), value: guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={hasEnded}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
      />
    </form>
  );
}

export default GuessInput;

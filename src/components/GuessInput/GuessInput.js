import React from "react";

function GuessInput({ gameStatus, handleAddGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGuess('');
    handleAddGuess(guess);
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        type="text"
        id="guess-input"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="A 5-letter word"
        onChange={(event) => {
          setGuess(event.target.value.toLocaleUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

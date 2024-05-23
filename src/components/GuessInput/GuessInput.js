import React from 'react';

function GuessInput({ onAddNewGuess, isGameOver }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddNewGuess(guess.toUpperCase());
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="^[A-Za-z]{5}$"
        maxLength={5}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessInput;

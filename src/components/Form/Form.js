import React from "react";

function Form({ addToHistory, gameOver }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addToHistory(guess);
    setGuess('');
  }
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        disabled={gameOver}
      />
    </form>
  );
}

export default Form;

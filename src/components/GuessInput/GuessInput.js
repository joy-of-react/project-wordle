import React from "react";

function GuessInput({ setGuesses }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) return;
    console.log({ guess });
    setGuesses((prevState) => [...prevState, guess]);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        required
        maxLength={5}
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

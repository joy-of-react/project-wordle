import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  function handleNewResult(result) {
    const nextGuesses = [...guesses, result];

    setGuesses(nextGuesses);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        handleNewResult(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern=".{5,}"
        required
        title="5 characters minimum"
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess.toUpperCase()}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

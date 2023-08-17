import React from "react";

const MAX_WORD_LENGTH = 5;

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={MAX_WORD_LENGTH}
        maxLength={MAX_WORD_LENGTH}
        pattern={`[A-Za-z]{${MAX_WORD_LENGTH}}`}
        title="A 5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

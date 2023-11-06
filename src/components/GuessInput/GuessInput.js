import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ appendGuess, guessNumber }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ answer: guess });
        appendGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        title="5 letters"
        onChange={(event) => {
          setGuess(event.target.value.toLocaleUpperCase());
        }}
        disabled={guessNumber >= NUM_OF_GUESSES_ALLOWED}
      />
    </form>
  );
}

export default GuessInput;

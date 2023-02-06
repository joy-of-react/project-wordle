import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({
  currentGuess,
  guessList,
  setCurrentGuess,
  setGuessList,
}) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        const newGuessList = [...guessList];
        newGuessList[currentGuess] = guess;
        setCurrentGuess(currentGuess + 1);
        setGuessList(newGuessList);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">
        Enter guess:
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="[a-zA-Z]{5}"
          title="5 letter guess"
          disabled={currentGuess === NUM_OF_GUESSES_ALLOWED}
          required
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </label>
    </form>
  );
}

export default GuessInput;

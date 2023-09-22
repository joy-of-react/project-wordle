import React, { useState } from "react";
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_ALLOWED,
} from "../../constants";

function InputField({ handleAddGuess, guesses }) {
  const pattern = `\\w{${NUM_OF_LETTERS_ALLOWED}}`;
  const lastGuess = guesses[guesses.length - 1];

  const [guess, setGuess] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess(guess);
    setGuess("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">
          Enter guess ({NUM_OF_LETTERS_ALLOWED} letters):
        </label>
        {guesses.length !== NUM_OF_GUESSES_ALLOWED ? (
          <input
            id="guess-input"
            type="text"
            pattern={pattern}
            value={guess}
            onChange={(event) => {
              setGuess(event.target.value.toUpperCase());
            }}
          />
        ) : (
          <input
            id="guess-input"
            type="text"
            value={lastGuess.guess}
            disabled
          />
        )}
      </form>
    </div>
  );
}

export default InputField;

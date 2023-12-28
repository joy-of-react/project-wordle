import React, { useState } from "react";
import { WORD_LENGTH } from "../../constants";

function GuessForm({ addNewGuess, gameIsActive }) {
  const [guess, setGuess] = useState("");

  const handleInputChange = (event) => {
    setGuess(String(event.target.value).toUpperCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addNewGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleInputChange}
        required
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        disabled={!gameIsActive}
      />
    </form>
  );
}

export default GuessForm;

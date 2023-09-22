import React, { useState } from "react";

function InputField({ handleAddGuess }) {
  const [guess, setGuess] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess(guess);
    setGuess("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess (5 letters):</label>
        <input
          id="guess-input"
          type="text"
          pattern="\w{5}"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default InputField;

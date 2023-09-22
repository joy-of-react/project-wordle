import React, { useState } from "react";

function InputField() {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
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
      <p>{guess}</p>
    </div>
  );
}

export default InputField;

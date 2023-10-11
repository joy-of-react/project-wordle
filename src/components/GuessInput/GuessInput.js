import React, { useState } from "react";

function GuessInput({ setGuess }) {
  const [inputWord, setInputWord] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    setGuess(inputWord);
    setInputWord("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handelSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="\w{5,}\D/g"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [inputWord, setInputWord] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(inputWord);
    setInputWord("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handelSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="\w{5,}"
        title="5 letter word"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

import React, { useState } from "react";

function GuessInput({ words, setWord }) {
  const [inputWord, setInputWord] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    const newWord = [...words];
    newWord.push(inputWord);
    setWord(newWord);
    setInputWord("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handelSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        // minLength={5}
        maxLength={5}
        pattern="\w{5,}"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ words, setWord, answer }) {
  const [inputWord, setInputWord] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    const newWord = [...words];
    newWord.push(inputWord);
    setWord(newWord);
    setInputWord("");
  };

  const win = words.includes(answer);
  const lose = words.length === NUM_OF_GUESSES_ALLOWED && !win;
  const isGameIsOver = win || lose;
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handelSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      {<input
        id="guess-input"
        type="text"
        required
        // minLength={5}
        maxLength={5}
        pattern="\w{5,}"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value.toUpperCase())}
      />}
      {isGameIsOver && (
        <Banner id="guess-input" win={win} guessCount={words.length} answer={answer} />
      )}
    </form>
  );
}

export default GuessInput;

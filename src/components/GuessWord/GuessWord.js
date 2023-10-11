import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessWord({ word, answer }) {
  let status = '';
  if (word.length) {
    status = checkGuess(word, answer);
  }
  console.log(answer);
  return (
    <p className="guess">
      {range(0, 5).map((cell, i) => (
        <span key={i} className={`cell ${status && status[i].status}`}>
          {word[i] || ""}
        </span>
      ))}
    </p>
  );
}

export default GuessWord;

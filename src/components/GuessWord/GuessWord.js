import React from "react";
import { range } from "../../utils";

function GuessWord({ word }) {
  return (
    <p className="guess">
      {range(0, 5).map((cell, i) => (
        <span key={i} className="cell">
          {word[i] || ""}
        </span>
      ))}
    </p>
  );
}

export default GuessWord;

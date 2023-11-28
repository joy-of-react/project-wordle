import React from "react";
import { range } from "../../utils";

function Guess({ guessValue }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {guessValue ? guessValue[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

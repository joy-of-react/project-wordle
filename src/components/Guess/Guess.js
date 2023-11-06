import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  console.log({ guess, answer });
  const guessStatus = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        const statusClass = guessStatus ? guessStatus[index].status : "";
        return (
          <span key={index} className={`cell ${statusClass}`}>
            {guess[index] ?? ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

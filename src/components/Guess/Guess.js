import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer, setIsWinner }) {
  const result = checkGuess(guess, answer);
  const cells = result ? result : ["", "", "", "", ""];

  if (cells.every((cell) => cell.status === "correct")) {
    setIsWinner(true);
  }

  return (
    <p className="guess">
      {cells.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

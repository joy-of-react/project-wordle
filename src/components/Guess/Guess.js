import React from "react";
import { range } from "../../utils";

function Guess({ guess = "GUESS" }) {
  const defaultGuess = range(0, 5).map((el) => "");
  const guessArr = guess === "" ? defaultGuess : guess.split("");

  return (
    <p className="guess">
      {guessArr.map((char, idx) => (
        <span key={idx} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;

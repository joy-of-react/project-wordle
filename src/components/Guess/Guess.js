import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  console.log({ guess });
  const result = checkGuess(guess, answer);
  // console.log(result);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {guess ? guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

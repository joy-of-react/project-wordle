import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const message = checkGuess(guess, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <span
            key={num}
            className={`cell ${guess ? message[num].status : ""}`}
          >
            {guess ? guess[num] : null}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;

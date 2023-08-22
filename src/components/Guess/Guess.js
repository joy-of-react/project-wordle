import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status, index }) {
  return (
    <div className={`${status} cell`} key={index}>
      {letter}
    </div>
  );
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);
  return (
    <div className="guess">
      {range(5).map((index) => {
        return (
          <Cell
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Guess;

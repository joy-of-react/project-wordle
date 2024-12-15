import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../../src/game-helpers";

function Guess({ value, answer }) {
  const letterStatuses = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span
            className={`cell ${
              letterStatuses ? letterStatuses[i].status : undefined
            }`}
            key={i}
          >
            {value?.split("")[i]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

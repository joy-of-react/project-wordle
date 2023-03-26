import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  let status = [];
  status = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={`cell ${status ? status[num].status : ""}`}
          >
            {value ? value[num] : null}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

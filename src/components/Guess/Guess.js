import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess() {
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map(() => (
        <p className="guess">
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p>
      ))}
    </div>
  );
}

export default Guess;

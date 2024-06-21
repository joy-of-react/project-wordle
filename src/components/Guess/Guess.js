import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guesses }) {
  // const cellRow = range(5).map((cell) => <span className="cell"></span>);
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map(() => (
        <p className="guess">
          {range(5).map((cell) => (
            <span className="cell">
              {guesses.map((guess, index) => guess[index])}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;

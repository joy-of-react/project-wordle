import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guesses }) {
  // const cell = guesses.map((guess) =>
  //   guess.split("").map((charOfGuess, index) => (
  //     <span class="cell" key={index}>
  //       {charOfGuess}
  //     </span>
  //   ))
  // );

  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <p className="guess" key={rowIndex}>
          {guesses[rowIndex]
            ? guesses[rowIndex].split("").map((char, index) => (
                <span className="cell" key={index}>
                  {char}
                </span>
              ))
            : range(5).map((cellIndex) => (
                <span className="cell" key={cellIndex}></span>
              ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;

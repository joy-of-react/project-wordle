import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guesses }) {
  const cell = guesses.map((guess) =>
    guess.split("").map((charOfGuess, index) => (
      <span class="cell" key={index}>
        {charOfGuess}
      </span>
    ))
  );

  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p className="guess" key={index}>
          {cell}
        </p>
      ))}
    </div>
  );
}

export default Guess;

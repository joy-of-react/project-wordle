import React from "react";

import Guess from "../Guess/index.js";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} word={guesses[num]} />;
      })}
    </div>
  );
}

export default GuessResults;

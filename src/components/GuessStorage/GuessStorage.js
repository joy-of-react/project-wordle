import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess/Guess";

function GuessStorage({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessStorage;

import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <Guess key={crypto.randomUUID()} guess={guesses[index]} />
      ))}
    </div>
  );
}

export default GuessResults;

import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        const { id, guess } = guessResults[i] || {};
        const key = id || i;

        return <Guess key={`guess-${key}`} guess={guess} />;
      })}
    </div>
  );
}

export default GuessResults;

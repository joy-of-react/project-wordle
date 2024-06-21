import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <Guess key={rowIndex} value={guesses[rowIndex]} />
      ))}
    </div>
  );
}

export default GuessesList;

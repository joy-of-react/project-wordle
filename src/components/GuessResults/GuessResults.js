import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess";

function GuessResults({ guessList }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess guess={guessList[num]} key={num} />
        ))}
      </div>
      <p>this is a test</p>
    </>
  );
}

export default GuessResults;

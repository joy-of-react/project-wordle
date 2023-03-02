import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess";

function GuessResults({ guessList }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) =>
          guessList[num] !== undefined ? (
            <Guess guess={guessList[num]} index={num} />
          ) : (
            <Guess index={num} />
          )
        )}
      </div>
      <p>something</p>
    </>
  );
}

export default GuessResults;

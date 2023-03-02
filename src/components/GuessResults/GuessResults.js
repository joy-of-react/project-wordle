import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

import Guess from "../Guess";

function GuessResults({ guessList, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess guess={checkGuess(guessList[num], answer)} key={num} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;

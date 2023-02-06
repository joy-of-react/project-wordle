import React from "react";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ answer, guessList }) {
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          value={guessList[num]}
          key={num}
          checked={checkGuess(guessList[num], answer)}
        />
      ))}
    </div>
  );
}

export default GuessResults;

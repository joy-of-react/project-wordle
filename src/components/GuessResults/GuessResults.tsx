import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { CheckedGuesses, GuessResults } from "../../types";

type GuessResultsProps = {
  guessResults: GuessResults;
  checkedGuesses: CheckedGuesses;
};

function GuessResults({ guessResults, checkedGuesses }: GuessResultsProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i: number) => {
        const { id, guess } = guessResults[i] || {};
        const key = id || i;

        return (
          <Guess
            key={`guess-${key}`}
            guess={guess}
            checkedGuess={checkedGuesses?.[i]}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;

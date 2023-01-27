import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const EMPTY_RESULT = range(5).map(() => ({ letter: "", status: "" }));

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, rowIndex) => {
        let result = EMPTY_RESULT;

        const hasGuessInRow = guessList.length >= rowIndex + 1;
        if (hasGuessInRow) {
          result = checkGuess(guessList[rowIndex], answer);
        }

        return (
          <p key={rowIndex} className="guess">
            {result.map((item, index) => (
              <span key={index} className={`cell ${item.status}`}>
                {item.letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;

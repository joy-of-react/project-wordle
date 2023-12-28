import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import GuessLine from "../GuessLine";

function GuessGrid({ guessList }) {
  const paddedGuessList = [
    ...guessList,
    ...range(NUM_OF_GUESSES_ALLOWED - guessList.length).fill({
      guess: range(WORD_LENGTH),
    }),
  ];

  console.log(paddedGuessList);

  return (
    <div className="guess-results">
      {paddedGuessList.map(({ guess, key }, index) => (
        <GuessLine guess={guess} key={key || index} />
      ))}
    </div>
  );
}

export default GuessGrid;

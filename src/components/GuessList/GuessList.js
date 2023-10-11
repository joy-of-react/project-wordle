import React from "react";
import GuessWord from "../GuessWord/GuessWord";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((word, i) => (
        <GuessWord
          key={i}
          answer={answer}
          className="guess"
          word={guessList[i] || []}
        />
      ))}
    </div>
  );
}

export default GuessList;

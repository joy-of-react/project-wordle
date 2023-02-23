import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ submittedGuesses, answer }) {
  const arrayToMapOver = range(0, 6);

  return (
    <div class="guess-results">
      {arrayToMapOver.map((_, index) => (
        <Guess
          answer={answer}
          submittedGuesses={submittedGuesses[index]}
          key={index}
        />
      ))}
    </div>
  );
}

export default GuessResults;

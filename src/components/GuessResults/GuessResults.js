import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses, answer, setIsWinner }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess
          guess={guess.value}
          answer={answer}
          setIsWinner={setIsWinner}
          key={guess.id}
        />
      ))}
    </div>
  );
}

export default GuessResults;

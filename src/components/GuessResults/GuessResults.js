import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guessList }) {
  return (
    <div>
      {guessList.map((guess, idx) => (
        <Guess guess={guess} key={idx} />
      ))}
    </div>
  );
}

export default GuessResults;

import React from "react";
import Guess from "../Guess";
function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, id }) => (
        <Guess guess={value} key={id} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;

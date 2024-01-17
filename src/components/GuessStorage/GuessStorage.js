import React from "react";

function GuessStorage({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((items) => (
        <p className="guess">{items}</p>
      ))}
    </div>
  );
}

export default GuessStorage;

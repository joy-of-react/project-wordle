import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((x, idx) => (
        <p key={idx} className="guess">
          {x}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((item) => {
        return (
          <p key={Math.random()} className="guess">
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;

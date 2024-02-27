import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, word }) => {
        return (
          <p id={id} className="guess">
            {word}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;

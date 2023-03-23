import React from "react";

function GuessList({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((item) => {
        return (
          <p key={Math.random()} className="guess">
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;

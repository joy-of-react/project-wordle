import React from "react";

function GuessResults({ guessList }) {
  return (
    <div>
      {guessList.map((guess, idx) => (
        <p className="guess" key={idx}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

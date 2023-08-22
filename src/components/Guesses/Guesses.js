import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results" role="list">
      {guesses.map((guess, index) => {
        return <div key={index}>{guess}</div>;
      })}
    </div>
  );
}

export default Guesses;

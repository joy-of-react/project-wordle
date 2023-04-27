import React from "react";

function GuessHistory({ history }) {
  return (
    <div className="guess-results">
      {
        history.map(guess => (
          <p className="guess" key={guess.id}>{guess.word}</p>
        ))
      }
    </div>
  );
}

export default GuessHistory;

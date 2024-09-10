import React from "react";

function GuessList({ previousGuesses }) {
  return (
    <div className="guess-results">
      {previousGuesses.map((item) => (
        <p key={crypto.randomUUID()} className="guess">
          {item}
        </p>
      ))}
    </div>
  );
}

export default GuessList;

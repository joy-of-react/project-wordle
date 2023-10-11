import React from "react";

function GuessList({ guessList }) {
  return (
    <div class="guess-results">
      {guessList.map((word, i) => (
        <p key={i} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessList;

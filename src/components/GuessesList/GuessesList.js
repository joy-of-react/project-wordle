import React from "react";

function GuessesList({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess, index) => (
        <p class="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;

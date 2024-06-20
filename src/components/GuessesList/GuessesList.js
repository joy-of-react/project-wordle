import React from "react";

function GuessesList({ guesses }) {
  return (
    <div>
      <div class="guess-results">
        {guesses.map((item) => {
          return (
            <p class="guess" key={item.id}>
              {item.guess}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default GuessesList;

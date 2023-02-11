import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults() {

  const rows = NUM_OF_GUESSES_ALLOWED;
  const columns = 5;

  // range(rows).map((word) => {console.log("hui")};


  return (
    <>
      <div className="guess-results">
        {range(rows).map((rowIndex) => (
          <p key={rowIndex} className="guess">
            {range(columns).map((columnIndex) => (
              <span key={columnIndex} className="cell">
              </span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessResults;

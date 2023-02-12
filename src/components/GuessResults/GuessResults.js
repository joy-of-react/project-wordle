import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ attempts }) {

  const rows = NUM_OF_GUESSES_ALLOWED;
  const columns = 5;

  function printLetterInCell(rowIndex, columnIndex) {
    if (!attempts[rowIndex]) {
      return;
    }
    return attempts[rowIndex][columnIndex];
  }

  return (
    <>
      <p>attempts[0] {attempts[0]}</p>
      <p>attempts[1] {attempts[1]}</p>
      <p>attempts.length: {attempts.boolean}</p>
      <div className="guess-results">
        {range(rows).map((rowIndex) => (
          <p key={rowIndex} className="guess">
            {range(columns).map((columnIndex) => (
              <span key={columnIndex} className="cell">
                {printLetterInCell(rowIndex, columnIndex)}
              </span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessResults;

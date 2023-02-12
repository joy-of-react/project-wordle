import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ attempts, answer }) {

  const rows = NUM_OF_GUESSES_ALLOWED;
  const columns = 5;

  function printLetterInCell(rowIndex, columnIndex) {
    if (!attempts[rowIndex]) {
      // if you omit this if statement to check for the presence of attempts, then 💩💩💩 i guess it's cuz accessing an undefined variable/array/object causes the React app to crash
      return;
    }
    return attempts[rowIndex][columnIndex];
  }

  const getCurrentLetterCSSClass = (attemptIndex, letterNumber, answer) => {
    if (!attempts[attemptIndex]) {
      // if you omit this if statement to check for the presence of attempts, then 💩💩💩
      return;
    }
    ;
    let currentLetterCSSClass;
    let currentLetterCheckObject = checkGuess(attempts[attemptIndex], answer);
    currentLetterCSSClass = currentLetterCheckObject[letterNumber].status;
    return currentLetterCSSClass;
  };

  return (
    <>
      <div className="guess-results">
        {range(rows).map((rowIndex) => (
          <p key={rowIndex} className="guess">
            {range(columns).map((columnIndex) => (
              <span key={columnIndex}
                    className={`cell ${getCurrentLetterCSSClass(rowIndex, columnIndex, answer)}`}>
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

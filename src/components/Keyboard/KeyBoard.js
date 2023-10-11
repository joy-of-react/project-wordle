import React from "react";
import { ROWS } from '../../constants'
import { checkGuess, getLetterStatus } from "../../game-helpers";

function Keyboard({ guessList, answer }) {
  const guesses = guessList.map((guess) => checkGuess(guess, answer));
  const statusByLetter = getLetterStatus(guesses);
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map((letter) => (
            <div
              className={`keyboard-letter ${statusByLetter[letter] || ''}`}
              key={letter}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

import React from "react";

import { range } from "../../utils";
import { CURRENT_LANGUAGE } from "../../constants";
import { KEYBOARD_LAYOUT } from "../../constants";

function handleKeyClick(event) {
  const guessInput = document.querySelector('#guess-input');
  if (guessInput.value.length < 6) {
    guessInput.focus();
    guessInput.value = guessInput.value + event.target.innerText;
  }
}

function KeyboardKey({ letter, checks }) {
  let value = checks.findLast((check) => {
    if (check.letter === letter) {
      return true;
    }
  })
  const status = value ? value.status : undefined;
  const className = status
    ? `keyboard-key ${status}`
    : 'keyboard-key';
  return (
    <button 
      className={className}
      onClick={(e) => handleKeyClick(e)}
    >
      {letter}
    </button>
  );
}

function KeyboardRow({row, checks}) {
  const keys = row.map((letter, index) => 
                <KeyboardKey key={index}
                  letter={letter}
                  checks={checks}
                  onClick={(e) => handleKeyClick(e)} />
  );
  return (
    <div className="keyboard-row">
      {keys}
    </div>
  );
}

function Keyboard({ checks }) {
  const layout = KEYBOARD_LAYOUT[CURRENT_LANGUAGE].toUpperCase();
  const letters = layout.split('');
  const rows = {};
  rows.row0 = letters.splice(0, 10);
  rows.row1 = letters.splice(0, 9);
  rows.row2 = letters.splice(0, 7);

  return (
    <div className="keyboard-wrapper">
      {range(3).map((num) => (
        <KeyboardRow key={num}
          row={Object.values(rows)[num]} 
          checks={checks}
        />
      ))}
    </div>
  );
}

export default Keyboard;

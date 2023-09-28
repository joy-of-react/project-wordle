import React from 'react';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

// This function analyzes a collection of validated guesses (guesses
// compared to the answer) to construct an object that tracks the
// status of each letter selected in the user's guesses. The resulting
// object provides information about the correctness and placement
// of each letter.
function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      // Preventing overwriting letters marked as 'correct'
      if (statusObj[letter] !== 'correct') {
        statusObj[letter] = status;
      }
    });
  });

  return statusObj;
}

// Keyboard component displays a virtual keyboard with letters. The
// component receives a collection of validated guesses and uses it to
// determine the status (correct, misplaced, or incorrect) of each letter.
// It visually represents the status of each letter by adding corresponding
// CSS classes to each letter tile.
const Keyboard = ({ validatedGuesses }) => {
  // Calculate the status of each letter based on the validated guesses
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className='keyboard'>
      {KEYBOARD_ROWS.map((row, index) => (
        <div className='keyboard-row' key={index}>
          {row.map((letter) => (
            <div
              // Apply CSS classes based on letter status
              className={`letter ${statusByLetter[letter] || ''}`}
              key={letter}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;

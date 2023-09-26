import React from 'react';
import { checkGuess } from '../../game-helpers';
import Key from './Key';
import styles from './Key.module.css';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach(guess => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

const KeyBoard = ({
  validatedGuesses,
  onEnter,
  onDelete,
  onChar,
  gameStatus,
}) => {
  let statusByLetter = getStatusByLetter(validatedGuesses); // how is it dynamic??

  const onClick = value => {
    if (value === 'ENTER') {
      onEnter();
    } else if (value === 'DELETE') {
      onDelete();
    } else {
      onChar(value);
    }
  };
  return (
    <div className="keyboard">
      {[0, 1].map(row => (
        <div className="keyboard-row" key={row}>
          {ROWS[row].map(letter => (
            <Key
              value={letter}
              key={letter}
              classStr={`key ${statusByLetter[letter] || ''}`}
              children={letter}
              gameStatus={gameStatus}
              onClick={onClick}
            />
          ))}
        </div>
      ))}

      <div className="keyboard-row">
        <Key
          value="Enter"
          children="Enter"
          onClick={onClick}
          classStr={`key ${styles.key_special}`}
          gameStatus={gameStatus}
        />
        {ROWS[2].map(letter => (
          <Key
            value={letter}
            key={letter}
            onClick={onClick}
            classStr={`key ${statusByLetter[letter] || ''}`}
            children={letter}
            gameStatus={gameStatus}
          />
        ))}

        <Key
          value="Delete"
          children="Delete"
          onClick={onClick}
          classStr={`key ${styles.key_special}`}
          gameStatus={gameStatus}
        />
      </div>
    </div>
  );
};

export default KeyBoard;

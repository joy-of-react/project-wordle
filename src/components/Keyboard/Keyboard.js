import { KEYBOARD_KEYS } from '../../data';

function Keyboard({ guessedLetters }) {
  return (
    <div className="keyboard">
      {KEYBOARD_KEYS.map((row) => (
        <div key={row} className="keyboard-row">
          {row.map((letter) => (
            <div
              key={letter}
              className={`keyboard-letter ${
                guessedLetters[letter] ? guessedLetters[letter] : ''
              }`}
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

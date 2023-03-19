import React from 'react';


const checkLetterStatus = (guesses, letter) => {
  const allGuesses = guesses.flat().filter(d => d.letter === letter);

  if (allGuesses.some(d => d.status === 'correct')) {
    return 'correct';
  }

  if (allGuesses.some(d => d.status === 'misplaced')) {
    return 'misplaced';
  }

  if (allGuesses.some(d => d.status === 'incorrect')) {
    return 'incorrect';
  }

  return '';
}

const QWERTY_LAYOUT = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
function Keyboard({ guesses }) {
  return <div className='keyboard'>{QWERTY_LAYOUT.map(row =>
    <div key={row} className='keyboard-row'>
      {row.split('').map(letter =>
        <Letter key={letter} letter={letter} guesses={guesses} />)}
    </div>
  )}</div>
}

const Letter = ({ letter, guesses }) => {
  const status = checkLetterStatus(guesses, letter);
  return <p className={`letter ${status}`}>{letter}</p>;
}

export default Keyboard;

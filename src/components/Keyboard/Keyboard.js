import React from 'react';


const checkLetterStatus = (guesses, letter) => {
  const allGuesses = guesses.flat().filter(d => d.letter === letter);

  if (allGuesses.some(d => d.status === 'correct')) {
    return 'var(--color-success)';
  }

  if (allGuesses.some(d => d.status === 'misplaced')) {
    return 'var(--color-warning)';
  }

  if (allGuesses.some(d => d.status === 'incorrect')) {
    return 'var(--color-gray-300)';
  }

  return '';
}

const QWERTY_LAYOUT = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
function Keyboard({ guesses }) {
  return <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px' }} >{QWERTY_LAYOUT.map(row => <div key={row} style={{ display: 'flex', gap: '4px' }}>
    {row.split('').map(letter => <Letter key={letter}  letter={letter} guesses={guesses} />)}
  </div>)}</div>
}

const Letter = ({ letter, guesses }) => {

  const status = checkLetterStatus(guesses, letter);

  return <p style={{ color: status === '' ? 'black' : 'white', textAlign: 'center', width: 25, height: 25, border: '1px solid black', backgroundColor: status }}>{letter}</p>;
}

export default Keyboard;

import React from 'react';
import { range } from '../../utils';

function Guess({ userGuess }) {
  const guessLetters = userGuess?.split("") || Array(5).fill("");

  return (
    <p className="guess">
      {range(0, 5, 1).map((index) => (
        <span className="cell">{guessLetters[index]}</span>
      ))}
    </p>
  );
}

export default Guess;

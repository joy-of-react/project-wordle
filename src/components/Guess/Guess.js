import React from 'react';
import { range } from '../../utils';

function Guess({ guessResult }) {
  const userGuess = guessResult || Array(5).fill("");
  return (
    <p className="guess">
      {range(0, 5, 1).map((index) => (
        userGuess[index]
          ? <span
            className={"cell " + userGuess[index].status}
            key={index}>
            {userGuess[index].letter}
          </span>
          : <span className="cell" key={index}></span>
      ))}
    </p>
  );
}

export default Guess;

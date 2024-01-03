import React from 'react';
import { range } from '../../utils';
import Cell from '../Cell/Cell';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);
  console.log({ result });

  return (
    <p className="guess">
      {
        range(5).map(num => {
          return (
            <Cell
              key={num}
              letter={result ? result[num].letter : undefined}
              status={result ? result[num].status : undefined}
            />
          );
        })
      }
    </p>
  );
}

export default Guess;

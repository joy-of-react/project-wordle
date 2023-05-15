import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : 'cell';

  return (
    <span className={className}>{letter}</span>
  )
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    < p className="guess" >
      {
        range(5).map((num) => (
          <Cell
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
            key={num}></Cell>
        ))
      }
    </p >
  );
}

export default Guess;
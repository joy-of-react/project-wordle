import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Cell = ({ letter, status }) => {
  return (
    <span className={status ? `cell ${status}` : 'cell'}>{letter}</span>
  );
};

function Guess({ value, answer }) {
  const results = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map(num => (
        <Cell
          key={num}
          letter={results ? results[num].letter : undefined}
          status={results ? results[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;

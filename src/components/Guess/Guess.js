import React from 'react';
import { range } from '../../utils';

const Cell = ({ letter, status }) => {
  return (
    <span className={status ? `cell ${status}` : 'cell'}>{letter}</span>
  );
};

const Guess = ({ word }) => {
  return (
    <p className="guess">
      {range(5).map(num => (
        <Cell
          key={num}
          letter={word ? word[num].letter : undefined}
          status={word ? word[num].status : undefined}
        />
      ))}
    </p>
  );
};

export default Guess;

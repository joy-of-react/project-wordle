import React from 'react';

import { range } from '../../utils';

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : 'cell';

  return (
    <span className={className}>{letter}</span>
  )
}

function Guess({ value, answer }) {
  return (
    < p className="guess" >
      {
        range(5).map((num) => (
          <Cell
            letter={value ? value[num].letter : undefined}
            status={value ? value[num].status : undefined}
            key={num}></Cell>
        ))
      }
    </p >
  );
}

export default Guess;
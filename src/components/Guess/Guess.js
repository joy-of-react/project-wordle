import React from 'react';
import { checkGuess } from '../../game-helpers';

import { range } from '../../utils';

function Cell(){
  
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span key={num} className={`cell ${result ? result[num].status : undefined}`}>
          {result ? result[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

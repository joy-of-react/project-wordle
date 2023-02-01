import React from 'react';

import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span key={num} className='cell'>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

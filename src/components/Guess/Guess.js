import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
  return (
    <p className="guess">
      {
        range(5).map(num => {
          return (
            <span key={num} className="cell">
              {word ? word.value[num] : undefined}
            </span>
          )
        })
      }
    </p>
  );
}

export default Guess;

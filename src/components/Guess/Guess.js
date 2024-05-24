import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({value}) {
  return (
      <p className="guess">
        {
          range(5).map(i => {
            return(<span className="cell" key={i}>
              {value ? value.guess[i]: undefined}
            </span>)
        })
        }
      </p>
    )
}

export default Guess;

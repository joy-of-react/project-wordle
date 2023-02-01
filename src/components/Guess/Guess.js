import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        return (
          <p key={rowIndex} className='guess'>
            {range(5).map((columnIndex) => {
              return (
                <span key={columnIndex} className='cell'>
                  {guesses.length >= rowIndex + 1 ? guesses[rowIndex].value[columnIndex] : ''}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;

import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      <p>Previous guesses:</p>
      {guesses.map(({ id, value }) => {
        return (
          <p key={id} className='guess'>
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;

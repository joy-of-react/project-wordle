import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className='guess-results'>
      <p>Previous guesses:</p>
      {guessResults.map(({ id, value }) => {
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

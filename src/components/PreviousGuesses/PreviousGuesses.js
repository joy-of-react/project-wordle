import React from 'react';

function PreviousGuesses({ previousGuesses }) {
  return (
    <div className='guess-results'>
      <p>Previous guesses:</p>
      {previousGuesses.map((guess) => {
        return (
          <p key={guess.id} className='guess'>
            {guess.value}
          </p>
        );
      })}
    </div>
  );
}

export default PreviousGuesses;

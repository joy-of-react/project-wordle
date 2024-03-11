import React from 'react';

function UserGuesses({ guesses }) {
  return (
    <>
      <h2>Your guesses:</h2>
      <div className='guess-results'>
        {guesses.map((guess, index) => (
          <p className='guess' key={index}>
            {guess.split('').map((letter, letterIndex) => {
              <span className='cell' key={letter}>
                {letter}
              </span>
              })}
          </p>
        ))}
      </div>
    </>
  );
}

export default UserGuesses;

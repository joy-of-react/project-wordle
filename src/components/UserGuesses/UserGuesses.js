import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function UserGuesses({ guesses }) {
  const guessesArray = range(NUM_OF_GUESSES_ALLOWED - 1).fill([]).map((_, index) => {
    return guesses[index] || ['', '', '', '', ''];
  });

  const randonIndex = () => (Math.random());


  return (
    <>
      <h2>Your guesses:</h2>
      <div className='guess-results'>
        {guessesArray.map((guess) => (
          <p className='guess' key={randonIndex()}>
            {Array.from(guess).map((letter) => (
              <span className='cell' key={randonIndex()}>
                {letter}
              </span>
              ))}
          </p>
        ))}
      </div>
    </>
  );
}

export default UserGuesses;

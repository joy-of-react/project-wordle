import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess} from '../../game-helpers';

function UserGuesses({ guesses, answer }) {
  let guessesResult = guesses.map((guess) => checkGuess(guess, answer));
  const emptySlots = Array(5).fill({letter: '', status: ''});

  let guessesArray = range(NUM_OF_GUESSES_ALLOWED).fill([]).map((_, index) => {
    return guessesResult[index] || [ ...emptySlots ];
  });

  const randonIndex = () => (Math.random());

  return (
    <>
      <h2>Your guesses:</h2>
      <div className='guess-results'>
        {guessesArray.map((guess) => (
          <p className='guess' key={randonIndex()}>
            {guess.map(( {letter, status} ) => (
              <span className={`cell ${status}`} key={randonIndex()}>
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

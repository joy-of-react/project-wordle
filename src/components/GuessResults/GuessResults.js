import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';
import Keyboard from '../KeyBoard';

function GuessResults({ validatedGuesses }) {
  const [keyboardStatus, setKeyboardStatus] = React.useState(
    Array(26).fill(undefined)
  );

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map(num => (
          <Guess key={num} word={validatedGuesses[num]} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;

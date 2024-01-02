import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function PreviousWord({ words }) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => {
        return (
          <Guess key={num} word={words[num]} />
        );
      })}
    </div>
  );
}

export default PreviousWord;

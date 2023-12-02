import React from 'react';

import { range } from '../../utils';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessArray, answer }) {
  
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => {
        return <Guess key={num} guess={guessArray[num]} answer={answer}/>
      })}
    </div>
  );
}

export default GuessResults;

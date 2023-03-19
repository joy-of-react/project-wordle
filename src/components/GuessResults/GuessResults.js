import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
  return <div className="guess-results">
    {range(0, NUM_OF_GUESSES_ALLOWED).map((guessIndex, index) => <Guess key={index} guess={guesses[guessIndex] || ''} />)}
</div>;
}

export default GuessResults;

import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ words, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess
          key={num}
          value={words[num] ? words[num].label : ''}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;

import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({value, answer}) {
  return (
      <p className="guess">
        {
          range(5).map(i => {
            const result = value ? checkGuess(value.guess, answer): '';
            let { status, letter} = result? result[i]: {};
            return(<span className={`cell ${status}`} key={i}>
              {letter}
            </span>)
        })
        }
      </p>
    )
}

export default Guess;

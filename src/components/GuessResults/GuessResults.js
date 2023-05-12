import React from 'react';
import { range } from '../../utils';

import Guess from '../Guess';

function GuessResults({ guesses }) {
  const [numOfGuessesAllowed, setNumOfGuessesAllowed] = React.useState(5);
  let guess1 = guesses[0];
  console.log(guess1);


  return (
    <>
      <div className="guess-results">
        {range(numOfGuessesAllowed).map((num) => (
          <Guess key={num} value={guesses[num]} />
        ))}
      </div>
    </>
  )
}

export default GuessResults;

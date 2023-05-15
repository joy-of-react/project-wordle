import React from 'react';
import { range } from '../../utils';

import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  const [numOfGuessesAllowed, setNumOfGuessesAllowed] = React.useState(5);

  return (
    <>
      <div className="guess-results">
        {range(numOfGuessesAllowed).map((num) => (
          <Guess key={num} value={guesses[num]} answer={answer} />
        ))}
      </div>
    </>
  )
}

export default GuessResults;

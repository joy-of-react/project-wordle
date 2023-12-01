import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ guessArray }) {
  
  return (
    <div className="guess-results">
      {guessArray.map(({guess, id}) => {
        return <p className="guess" key={id}>{<Guess guess={guess}/>}</p>
      })}
    </div>
  );
}

export default GuessResults;

import React from 'react';

function GuessResults({ guessArray }) {
  
  return (
    <div className="guess-results">
      {guessArray.map(({guess, id}) => {
        return <p className="guess" key={id}>{guess}</p>
      })}
    </div>
  );
}

export default GuessResults;

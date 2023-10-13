import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className='guess-results'>
      {guessResults.map(({id, label}) => (
        <p key={id} className="guess">{label}</p>
      ))}
    </div>
  );
}

export default GuessResults;

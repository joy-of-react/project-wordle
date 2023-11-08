import React from 'react';

function GuessList({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
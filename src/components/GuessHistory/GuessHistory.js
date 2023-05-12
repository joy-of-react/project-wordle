import React from 'react';

function GuessHistory({ guesses }) {
  return (
    <>
      <div className="guess-results">
        <ol>
          {guesses.map((guess, index) => {
            return (
              <p className="guess" key={index}>{guess}</p>
            )
          })}
        </ol>
      </div>
    </>
  )
}

export default GuessHistory;

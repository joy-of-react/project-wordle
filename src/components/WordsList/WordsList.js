import React from 'react';

function WordsList({guesses}) {
  return(
    <div className="guess-results">
      {guesses.map((item, index) => (
        <p className="guess" key={index}>{item}</p>
      ))}
    </div>
  );
}

export default WordsList;

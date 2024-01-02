import React from 'react';

function PreviousWord({ words }) {
  return (
    <div className="guess-results">
      {words.map(({ id, value }) => {
        return (
          <p
            className="guess"
            key={id}
          >
            {value}
          </p>
        )
      })}
    </div>
  );
}

export default PreviousWord;

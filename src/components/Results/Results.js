import React from "react";

function Results({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map(g => <p key={ crypto.randomUUID()} className='guess'>{g}</p>)}
    </div>
  );
}

export default Results;

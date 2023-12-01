import React from 'react';

function Guess({ guess }) {
  const letterArray = guess.split('');
  const letterWithId = letterArray.map((letter) => {
    return {letter, id: crypto.randomUUID()}
  });

  return (
    <>
      {letterWithId.map(({ letter, id }) => {
        return <span className="cell" key={id}>{letter}</span>
      })}
    </>
  );
}

export default Guess;

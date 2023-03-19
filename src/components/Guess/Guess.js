import React from 'react';
import { range } from '../../utils';



function Guess({ guess }) {
  return <p className="guess">{range(0, 5).map((letterIndex) => {
    const letterInfo = guess[letterIndex];
    if (!letterInfo) return <span key={letterIndex} className="cell"></span>;

    return <span key={letterIndex} className={`cell ${guess[letterIndex].status}`}>{guess[letterIndex].letter}</span>
  })}</p>
}

export default Guess;

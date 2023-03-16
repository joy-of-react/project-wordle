import React from "react";

import { range } from '../../utils';

function Guess({ checkedGuess = [] }) {
  return (
    <p className="guess">{
      checkedGuess.length === 0 ?
        range(0, 5).map((g, index) => (
          <span key={index} className='cell'>{' '}</span>
        )) : 
          checkedGuess.map(({ letter, status }, idx) => (
              <span
                key={idx}
                className={`cell ${status}` }>{letter}</span>
          ))
    }</p>
  )
}

export default Guess;

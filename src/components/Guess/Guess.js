import React from "react";

import { range } from '../../utils';

function Guess({ children = '' }) {
  const len = children ? children.length : 5;
  return (
    <p className="guess">{
      range(0, len).map((g, index) => (
        <span key={index} className='cell'>{children ? children[g] : ' '}</span>
      ))
    }</p>
  )
}

export default Guess;

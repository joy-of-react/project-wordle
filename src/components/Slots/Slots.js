import React from 'react';

import {range} from'../../utils'
import { checkGuess } from '../../game-helpers';


function Cell({letter, status}) {
  const className = status ?
  `cell ${status}` :
  `celll`;
  return<span className={className}>{letter}</span>
}

function Slots({value, answer}) {
const result = checkGuess(value, answer);
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <Cell key={num} letter={result? result[num].letter : undefined} status={result? result[num].status : undefined}/>
      ))}
    </p>
  );}


export default Slots;

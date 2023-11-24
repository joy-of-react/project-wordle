import React from 'react';
import { range } from '../../utils';

function Guess({ word, key }) {
  return <p key={key} className='guess'>{
    range(5).map(i =>
      <span className='cell' >{word.charAt(i)}</span>
    )
  }</p>;
}

export default Guess;

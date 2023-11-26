import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


export function Guess({ word, answer }) {
  if (!word || !answer) {
    return EmptyGuess();
  }


  console.info({ answer });


  const wordObject = checkGuess(word, answer);
  // [{
  //    letter: character,
  //    status: 'correct' | 'incorrect' | 'misplaced'
  // }, ... ]



  return <p className='guess'>{
    wordObject.map((element, index) =>
      <span className={'cell ' + element.status} key={index} >{element.letter}</span>
    )
  }</p>
}

export function EmptyGuess() {
  return <p className='guess'>{
    range(5).map(i =>
      <span className={'cell'} key={i} >{' '}</span>
    )
  }</p>
}

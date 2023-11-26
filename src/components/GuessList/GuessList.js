import React from 'react';
import { Guess, EmptyGuess } from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({ list, answer }) {
  console.info({ answer });

  return (
    <div className='guest-results'>
      {list.map((e, index) => <Guess answer={answer} word={e} key={index} />)}
      {range(NUM_OF_GUESSES_ALLOWED - list.length).map((e, index) => <EmptyGuess key={index} />)}
    </div>
  );
}

export default GuessList;

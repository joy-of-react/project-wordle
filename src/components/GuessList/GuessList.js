import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({ list }) {
  return (
    <div className='guest-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((e, index) => <Guess word={e} key={index} />)}
      {list.map((e, index) => <Guess word={e} key={index} />)}
    </div>
  );
}

export default GuessList;

import React from 'react';
import { sample } from 'new-component/src/utils';
import { WORDS } from '../../data';

function Button({gameReset}) {
  return <div className='reset-block'>
    <p>Want to play again?</p>
    <button onClick={() => gameReset(sample(WORDS))}>Restart</button>
  </div>;
}

export default Button;

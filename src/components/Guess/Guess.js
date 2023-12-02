import React from 'react';

import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  return (
    <>
      <p className="guess">
        {range(WORD_LENGTH).map(num => {
          return (
            <span
              key={num}
              className={checkedGuess ? `cell ${checkedGuess[num].status}` : 'cell'}
            >
              {checkedGuess ? checkedGuess[num].letter : undefined}
            </span>
          );
        })}
      </p>
    </>
  );
}

export default Guess;

import React from 'react';

import Banner from '../Banner/Banner';

function WinBanner({ guessArray }) {
  const numOfGuesses = guessArray.length === 1 ?
    ' 1 guess' : `${ guessArray.length} guesses`;
  return (
    <Banner
      variant='happy'
    >
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numOfGuesses}</strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;

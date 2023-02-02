import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses} guess{numOfGuesses > 1 ? 'es' : ''}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;

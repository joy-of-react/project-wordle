import React from 'react';

import Banner from '../Banner/Banner';

function LoseBanner({ answer, handleRestart }) {
  return (
    <Banner variant='sad'>
      <p>Sorry, the correct answer was <strong>{answer}</strong>.</p>
      <button
        onClick={handleRestart}
      >
        New Game
      </button>
    </Banner>
  );
}

export default LoseBanner;

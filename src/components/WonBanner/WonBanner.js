import React from 'react';

function WonBanner({guessCount}) {
  return <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>{guessCount} guesses</strong>.
  </p>
</div>;
}

export default WonBanner;

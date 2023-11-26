import React from 'react';

function Banner({ gameStatus, numOfGuesses, answer }) {
  const mood = gameStatus === 'won' ? 'happy' : 'sad';
  return <div className={`banner ${mood}`}>
    <p>
      {mood === 'happy' && <>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${numOfGuesses} `}guess{numOfGuesses > 1 && 'es'}</strong>.
      </>
      }
      {mood === 'sad' && <>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </>
      }
    </p>
  </div>
}

export default Banner;

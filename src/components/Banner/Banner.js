import React from 'react';

function Banner({ gameResult, answer, guesses}) {
  const bannerStyle = gameResult === 'win' ? 'happy' : 'sad';
  const loseText = <p>Sorry, the correct answer is <strong>{answer}</strong></p>
  const winText = <p>Congratulations! Got it in <strong>{`${guesses.length} ${guesses.length > 1 ? 'guesses' : 'guess'}`}</strong>.</p>
  
  return (
    gameResult && (
      <div className={`${bannerStyle} banner`} >
      {gameResult === 'win' ? winText : loseText}
      </div>
      )
  );
}

export default Banner;

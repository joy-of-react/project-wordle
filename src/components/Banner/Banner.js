import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


export function GameOverBanner({ gameStatus, numOfGuesses, answer, handleRestart }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in<strong> {numOfGuesses} {(numOfGuesses === 1) ? "guess" : "guesses"}</strong>.
        </p>
        <button className="animates" onClick={handleRestart}>Restart</button>
      </div>
    )
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button className="animates" onClick={handleRestart}>Restart</button>
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default GameOverBanner;
import React from 'react';

function NewGameBtn({ handleRestart, gameStatus }) {
  return (
    <button
      className={`btn ${gameStatus === 'inGame' ? 'visually-hidden' : ''}`}
      onClick={handleRestart}
    >
      New Game
    </button>
  );
}

export default NewGameBtn;

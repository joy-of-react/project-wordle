import React from "react";

function RestartGameButton({ handleRestart }) {
  return (
    <button 
      className="restart-button"
      onClick={() => handleRestart()}
    >
      <p>Play again?</p>
    </button>
  );
}

function Banner({ status, handleRestart, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <RestartGameButton 
        handleRestart={handleRestart}
      />
    </div>
  );
}

export default Banner;

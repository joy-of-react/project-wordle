import React from "react";

function Guess({ guess }) {
  return guess ? (
    <p className="guess">
      <span className="cell">{guess[0]}</span>
      <span className="cell">{guess[1]}</span>
      <span className="cell">{guess[2]}</span>
      <span className="cell">{guess[3]}</span>
      <span className="cell">{guess[4]}</span>
    </p>
  ) : (
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
}

export default Guess;

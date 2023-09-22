import React from "react";

function Guess({ guess }) {
  const letters = guess?.guess?.split("") ?? [];

  return (
    <p className="guess">
      <span className="cell">{letters[0]}</span>
      <span className="cell">{letters[1]}</span>
      <span className="cell">{letters[2]}</span>
      <span className="cell">{letters[3]}</span>
      <span className="cell">{letters[4]}</span>
    </p>
  );
}

export default Guess;

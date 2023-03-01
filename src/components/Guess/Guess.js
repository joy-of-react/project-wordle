import React from "react";

function Guess({ guess = "     ", index }) {
  const guessArray = guess.split("");
  return (
    <p key={index} class="guess">
      {guessArray.map((letter, index) => (
        <span key={index} class="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ submittedGuesses, answer }) {
  const guessValidate = checkGuess(submittedGuesses?.guess, answer);

  return (
    <p class="guess">
      <span class={`cell ${!!guessValidate ? guessValidate[0]?.status : ""}`}>
        {submittedGuesses?.guess[0]}
      </span>
      <span class={`cell ${!!guessValidate ? guessValidate[1]?.status : ""}`}>
        {submittedGuesses?.guess[1]}
      </span>
      <span class={`cell ${!!guessValidate ? guessValidate[2]?.status : ""}`}>
        {submittedGuesses?.guess[2]}
      </span>
      <span class={`cell ${!!guessValidate ? guessValidate[3]?.status : ""}`}>
        {submittedGuesses?.guess[3]}
      </span>
      <span class={`cell ${!!guessValidate ? guessValidate[4]?.status : ""}`}>
        {submittedGuesses?.guess[4]}
      </span>
    </p>
  );
}

export default Guess;

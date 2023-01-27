import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");

  function handleGuessSent(value) {
    console.log({ guess: value });
    setGuess(value);
  }
  return (
    <>
      <GuessInput handleGuessSent={handleGuessSent} />
    </>
  );
}

export default Game;

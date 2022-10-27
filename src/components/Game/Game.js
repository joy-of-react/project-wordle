import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(["TODAY", "WORLD", "THREE"]);

  return (
    <>
      <Guess guesses={guesses} />
      <GuessInput setGuesses={setGuesses} />
    </>
  );
}

export default Game;

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/index.js";
import GuessResults from "../GuessResults/index.js";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleAddGuess(guess) {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;

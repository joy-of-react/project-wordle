import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/index.js";
import GuessInput from "../GuessInput/index.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleAddGuess(word) {
    newGuess = { id: crypto.randomUUID(), word: word };
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;

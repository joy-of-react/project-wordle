import React, { useState } from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessResults from "../GuessResults/GuessResults";
import InputField from "../InputField/InputField";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleAddGuess(guess) {
    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }

  return (
    <div>
      <GuessResults guesses={guesses} />
      <InputField handleAddGuess={handleAddGuess} />
    </div>
  );
}

export default Game;

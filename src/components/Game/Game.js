import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessField from "../GuessField/GuessField";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [previousGuesses, setPreviousGuesses] = useState([]);
  function handleSubmitGuesses(guess) {
    setGuesses([...guesses, guess]);
  }
  return (
    <div>
      <GuessList previousGuesses={guesses} />
      <GuessField handleSubmitGuesses={handleSubmitGuesses} />
    </div>
  );
}

export default Game;

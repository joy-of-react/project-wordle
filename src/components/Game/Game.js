import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import GuessList from "../GuessList";
import Guess from "../Guess";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);

  function handleSubmitGuess(guess) {
    setGuessResults([...guessResults, guess]);
  }

  return (
    <>
      <GuessList guessResults={guessResults} />
      <Input handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;

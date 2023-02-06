import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
const DEFAULT_GUESSLIST = range(0, NUM_OF_GUESSES_ALLOWED).map((el) => "");
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState(DEFAULT_GUESSLIST);
  const [currentGuess, setCurrentGuess] = useState(0);

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
    </>
  );
}

export default Game;

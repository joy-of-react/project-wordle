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
  const [guess, setGuess] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  return (
    <div>
      <GuessList previousGuesses={previousGuesses} />
      <GuessField
        guess={guess}
        previousGuesses={previousGuesses}
        setGuess={setGuess}
        setPreviousGuesses={setPreviousGuesses}
      />
    </div>
  );
}

export default Game;

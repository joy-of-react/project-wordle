import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessedInput from "../GuessedInput";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  // list of guesses in state
  const [guesses, setGuesses] = React.useState([]);

  // handles adding guesses to guessesList state
  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessedInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;

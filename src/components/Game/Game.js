import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function inputSubmit(newGuess) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuessList([...guessList, newGuess]);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput inputSubmit={inputSubmit} />
    </>
  );
}

export default Game;

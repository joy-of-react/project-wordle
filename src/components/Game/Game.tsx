import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const handleSubmitGuess = (guess) => {
    const nextGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    const nextGuessResults = [...guessResults, nextGuess];
    setGuessResults(nextGuessResults);
  };
  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;

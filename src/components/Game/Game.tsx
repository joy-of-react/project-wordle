import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { CheckedGuesses, Guess } from "../../types";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState<Guess[]>([]);
  const [checkedGuesses, setCheckedGuesses] = React.useState<CheckedGuesses>(
    []
  );

  const handleSubmitGuess = (guess: string) => {
    const nextGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    const nextGuessResults = [...guessResults, nextGuess];
    setGuessResults(nextGuessResults);

    const nextCheckedGuesses = [...checkedGuesses, checkGuess(guess, answer)];
    setCheckedGuesses(nextCheckedGuesses);
  };

  return (
    <>
      <GuessResults
        guessResults={guessResults}
        checkedGuesses={checkedGuesses}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;

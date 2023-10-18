import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { CheckedGuesses, Guess } from "../../types";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState<Guess[]>([]);
  const [checkedGuesses, setCheckedGuesses] = React.useState<CheckedGuesses>(
    []
  );
  const [isWinner, setIsWinner] = React.useState(false);

  const handleSubmitGuess = (guess: string) => {
    const nextGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    const nextGuessResults = [...guessResults, nextGuess];
    setGuessResults(nextGuessResults);

    const nextCheckedGuesses = [...checkedGuesses, checkGuess(guess, answer)];
    setCheckedGuesses(nextCheckedGuesses);

    setIsWinner(guess === answer);
  };

  const variant = isWinner
    ? "happy"
    : !isWinner && guessResults.length >= NUM_OF_GUESSES_ALLOWED
    ? "sad"
    : null;

  return (
    <>
      <GuessResults
        guessResults={guessResults}
        checkedGuesses={checkedGuesses}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      <Banner variant={variant} guessResults={guessResults} answer={answer} />
    </>
  );
}

export default Game;

import React from "react";

import { sample, range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => ({
      id: crypto.randomUUID(),
      value: "",
    }))
  );
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const [isWinner, setIsWinner] = React.useState(false);

  const handleGuessSubmit = (guess) => {
    if (currentGuess >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("You've used up all your guesses!");
      return;
    }

    const newGuesses = [...guesses];
    newGuesses[currentGuess] = guess;
    setGuesses(newGuesses);
    setCurrentGuess(currentGuess + 1);
  };

  const hasEnded = currentGuess >= NUM_OF_GUESSES_ALLOWED || isWinner;

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        setIsWinner={setIsWinner}
      />
      <GuessInput onSubmit={handleGuessSubmit} hasEnded={hasEnded} />

      {isWinner && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
      {currentGuess === NUM_OF_GUESSES_ALLOWED && !isWinner && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;

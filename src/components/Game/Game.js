import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({
      value: "",
      id: crypto.randomUUID(),
    }))
  );
  const [guessNumber, setGuessNumber] = React.useState(0);
  const appendGuess = (guess) => {
    const newGuesses = [...guesses];
    newGuesses[guessNumber].value = guess;
    setGuesses(newGuesses);
    setGuessNumber(guessNumber + 1);
  };
  const gameWon = guesses[guessNumber - 1]?.value === answer;
  const gameLost = guessNumber >= NUM_OF_GUESSES_ALLOWED && !gameWon;
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput appendGuess={appendGuess} guessNumber={guessNumber} />
      {gameWon && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessNumber} guesses</strong>.
          </p>
        </div>
      )}
      {gameLost && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;

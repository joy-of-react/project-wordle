import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessField from "../GuessField/GuessField";
import GuessList from "../GuessList/GuessList";
import { checkGuess } from "../../game-helpers";
import EndingBanner from "../EndingBanner/EndingBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [isGameOver, setIsGameOver] = useState({
    status: "incorrect",
    isGameOver: false,
  });
  function handleSubmitGuesses(guess) {
    const validate = checkGuess(guess, answer);
    setGuesses([...guesses, validate]);
    if (validate.every((item) => item.status === "correct")) {
      setIsGameOver({ status: "correct", isGameOver: true });
    } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver({ status: "incorrect", isGameOver: true });
    }
    // setIsGameOver(
    //   validate.every((item) => item.status === "correct") ||
    //     guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED
    // );
  }

  return (
    <div>
      <GuessList previousGuesses={guesses} />
      <GuessField
        handleSubmitGuesses={handleSubmitGuesses}
        isGameOver={isGameOver}
      />
      {
        <EndingBanner
          gameIsOver={isGameOver}
          answer={answer}
          numOfGuesses={guesses.length}
        />
      }
    </div>
  );
}

export default Game;

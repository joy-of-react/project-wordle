import React, { useState } from "react";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessResults from "../GuessResults/GuessResults";
import InputField from "../InputField/InputField";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleAddGuess(guess) {
    const newGuess = { guess, id: crypto.randomUUID() };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <InputField handleAddGuess={handleAddGuess} guesses={guesses} />
    </div>
  );
}

export default Game;

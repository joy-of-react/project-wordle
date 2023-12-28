import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm";
import GuessGrid from "../GuessGrid";
import Banner from "../Banner";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guessList, setGuessList] = useState([]);
  const [gameIsWon, setGameIsWon] = useState(false);

  console.info({ answer });

  const addNewGuess = (guess) => {
    const newGuessList = [
      ...guessList,
      { guess: checkGuess(guess, answer), key: crypto.randomUUID() },
    ];
    const guessIsCorrect =
      String(guess).toLowerCase() === String(answer).toLowerCase();

    setGuessList(newGuessList);
    setGameIsWon(guessIsCorrect);
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setGameIsWon(false);
  };

  const gameIsActive = !gameIsWon && guessList.length < NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      {!gameIsActive && (
        <Banner
          victory={gameIsWon}
          numberOfGuesses={guessList.length}
          correctAnswer={answer}
          resetGame={resetGame}
        />
      )}
      <GuessGrid guessList={guessList} />
      <GuessForm addNewGuess={addNewGuess} gameIsActive={gameIsActive} />
    </>
  );
}

export default Game;

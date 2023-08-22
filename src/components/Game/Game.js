import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import {
  NUM_OF_GUESSES_ALLOWED,
  GAME_STATUS_RUNNING,
  GAME_STATUS_LOST,
  GAME_STATUS_WIN,
} from "../../constants";

import GuessedInput from "../GuessedInput";
import Guesses from "../Guesses";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  // list of guesses in state
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS_RUNNING);

  // handles adding guesses to guessesList state
  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    if (tentativeGuess !== answer && guesses.length > NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUS_LOST);
    } else if (tentativeGuess === answer) {
      setGameStatus(GAME_STATUS_WIN);
    }
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessedInput
        handleSubmitGuess={handleSubmitGuess}
        disableAttempts={gameStatus !== GAME_STATUS_RUNNING}
      />
      {gameStatus !== GAME_STATUS_RUNNING && (
        <Banner
          gameStatus={gameStatus}
          numOfAnswers={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;

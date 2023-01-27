import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import ResultBanner from "../ResultBanner/ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  const DEFAULT_GAME_RESULT = {
    gameOver: false,
    won: false,
  };
  const [gameResult, setGameResult] = React.useState(DEFAULT_GAME_RESULT);

  function handleGuessSent(value) {
    if (gameResult.gameOver) return;

    console.log({ guess: value });

    if (guessList.indexOf(value) > -1) {
      console.log("Guess already sent!");
      return;
    }

    setGuess(value);
    const nextGuessList = [...guessList, value];
    setGuessList(nextGuessList);

    // detect game won
    if (value === answer) {
      setGameResult({ gameOver: true, won: true });
    }

    // detect game lost
    if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult({ gameOver: true, won: false });
    }
  }

  function resetGame() {
    setGuessList([]);
    setGameResult(DEFAULT_GAME_RESULT);
  }
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput handleGuessSent={handleGuessSent} />
      {gameResult.gameOver && (
        <ResultBanner
          answer={answer}
          numGuesses={guessList.length}
          gameWon={gameResult.won}
          resetGame={resetGame}
        />
      )}
    </>
  );
}

export default Game;

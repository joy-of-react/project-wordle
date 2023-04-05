import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResult from "../GuessResult/GuessResult";
import {
  NUM_OF_GUESSES_ALLOWED,
  GAME_STATE_STARTED,
  GAME_STATE_WON,
  GAME_STATE_LOST,
} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ gameState, setGameState }) {
  const [guess, setGuess] = React.useState("");
  const [guessResult, setGuessResult] = React.useState([
    // {guess: "", id: "uuid"}
  ]);

  function handleGuessSubmit(event) {
    event.preventDefault();
    setGuess("");

    let nextGuessResult = [...guessResult];
    const nextGuess = { guess, id: crypto.randomUUID() };
    nextGuessResult.push(nextGuess);
    setGuessResult(nextGuessResult);
    console.log(nextGuess);

    if (nextGuessResult.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState({
        state: GAME_STATE_LOST,
        guesses: nextGuessResult.length,
        answer: answer,
      });
      return;
    }

    if (guess === answer) {
      setGameState({ state: GAME_STATE_WON, guesses: nextGuessResult.length });
      return;
    }

    setGameState({
      state: GAME_STATE_STARTED,
      guesses: nextGuessResult.length,
    });
  }

  return (
    <>
      <GuessResult guessResult={guessResult} answer={answer} />

      <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={guess}
          pattern="[A-Z]{5}"
          maxLength={5}
          type="text"
          disabled={
            gameState.state === GAME_STATE_WON ||
            gameState.state === GAME_STATE_LOST
          }
          // convert all values to uppercase
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Game;

import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const isWinner = guessList.includes(answer);
  const gameOver = isWinner || guessList.length > 5;

  const bannerClass = isWinner ? "happy" : "sad";
  const bannerMessage = isWinner
    ? `<strong>Congratulations!</strong> You got it in <strong>${guessList.length} guess(es)!!</strong>`
    : `<p>Sorry, the correct answer is <strong>${answer}</strong>.</p>`;

  function inputSubmit(newGuess) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuessList([...guessList, newGuess]);
  }

  return (
    <>
      {gameOver && (
        <div className={`${bannerClass} banner`}>
          <p dangerouslySetInnerHTML={{ __html: bannerMessage }}></p>
        </div>
      )}

      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput inputSubmit={inputSubmit} disabled={gameOver} />
    </>
  );
}

export default Game;

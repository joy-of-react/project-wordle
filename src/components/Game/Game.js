import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [submittedGuesses, setSubmittedGuesses] = React.useState([]);
  const userAnsweredCorreclty = submittedGuesses.some(
    ({ guess }) => guess === answer
  );

  const gameIsOver = userAnsweredCorreclty || submittedGuesses.length >= 6;

  return (
    <>
      <GuessResults submittedGuesses={submittedGuesses} answer={answer} />
      <WordInput
        gameIsOver={gameIsOver}
        setSubmittedGuesses={setSubmittedGuesses}
      />

      <Keyboard answer={answer} submittedGuesses={submittedGuesses} />

      {userAnsweredCorreclty && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{submittedGuesses.length} guesses</strong>.
          </p>
        </div>
      )}

      {!userAnsweredCorreclty && submittedGuesses.length >= 6 && (
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

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //
  const [historyStack, setHistoryStack] = React.useState([]);
  const gridData = range(NUM_OF_GUESSES_ALLOWED).map((_) =>
    range(5).map((_) => ({ letter: "", status: "" }))
  );

  //
  const isWin = historyStack.some((guess) =>
    checkGuess(guess, answer).every(({ status }) => status === "correct")
  );
  const status = isWin ? "win" : historyStack.length === 6 ? "lose" : "playing";

  //
  for (let i = 0; i < historyStack.length; i++) {
    const guess = historyStack[i];
    const row = checkGuess(guess, answer);

    gridData[i] = row;
  }

  return (
    <>
      <Guess gridData={gridData} />
      <Input
        setHistoryStack={setHistoryStack}
        disabled={status !== "playing"}
      />
      {status === "win" && <HappyBanner step={historyStack.length} />}
      {status === "lose" && <SadBanner answer={answer} />}
    </>
  );
}

function HappyBanner({ step }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{step} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Game;

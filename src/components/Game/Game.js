import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessesResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
  }

  let answerStatus;

  if (guesses.includes(answer)) {
    answerStatus = "won";
  } else if (guesses.length > 5) {
    answerStatus = "lost";
  } else {
    answerStatus = "running";
  }

  return (
    <>
      <Banner guesses={guesses} answerStatus={answerStatus} answer={answer} />
      <GuessesResults
        guesses={guesses}
        answerStatus={answerStatus}
        answer={answer}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        answerStatus={answerStatus}
      />
    </>
  );
}

export default Game;

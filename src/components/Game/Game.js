import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  let status = "running";

  if (guessList.includes(answer)) {
    status = "won";
  } else if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
    status = "lost";
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        disabled={status !== "running"}
      />
      {status !== "running" && (
        <Banner
          answer={answer}
          guesses={guessList.length}
          winner={status === "won"}
        />
      )}
    </>
  );
}

export default Game;

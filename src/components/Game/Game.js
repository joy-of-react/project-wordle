import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Input from "../Input";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [attempts, setAttempts] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);
  const [hasFinishedGame, setHasFinishedGame] = React.useState(false);

  // const displayBanner = (hasFinishedGame) => {
  //   if (hasFinishedGame) {
  //     return <Banner hasFinishedGame={hasFinishedGame} hasWon={hasWon} />;
  //   }
  // };

  return (
    <>
      <GuessResults attempts={attempts} answer={answer} />
      <Input attempts={attempts} setAttempts={setAttempts} setHasWon={setHasWon}
             setHasFinishedGame={setHasFinishedGame} answer={answer} maxGuesses={NUM_OF_GUESSES_ALLOWED} />
      {/*<Banner hasFinishedGame={hasFinishedGame} hasWon={hasWon} />*/}
      {/*displayBanner(hasFinishedGame)*/}
      {hasFinishedGame &&
        <Banner hasFinishedGame={hasFinishedGame}
                hasWon={hasWon}
                attempts={attempts}
                answer={answer} />}
    </>
  );
}

export default Game;

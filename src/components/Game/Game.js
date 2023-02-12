import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import Attempts from "../Attempts";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [attempts, setAttempts] = React.useState([]);


  return (
    <>

      <GuessResults attempts={attempts} answer={answer} />

      <Input attempts={attempts} setAttempts={setAttempts} />
    </>
  );
}

export default Game;

import React from "react";
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from "../GuessResult/GuessResult";
import Status from "../Status/Status";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStaus] = React.useState("loading");
  const [guessList, setGuessList] = React.useState([]);

  const AddHandler = (input) => {
    const guesss = [...guessList, input];
    setGuessList([...guesss]);
    if (input === answer) {
      setGameStaus("won");
    } else if (input !== answer && guessList.length === 5) {
      setGameStaus("lose");
    } else {
      setGameStaus("loading");
    }
  };
  console.log(guessList.length);

  return (
    <>
      <GuessResult guesss={guessList} answer={answer} result={gameStatus} />
      <GuessForm AddHandler={AddHandler} result={gameStatus} />
      <Status state={gameStatus} answer={answer} />
    </>
  );
}

export default Game;

import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import KeyBoard from "../Keyboard/KeyBoard";

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = useState("running");
  function handleSubmitGuess(inputValue) {
    const nextGuesses = [...guessList, inputValue];
    setGuessList(nextGuesses);

    if (inputValue === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  const handleResatart = () => {
    setGuessList([]);
    setGameStatus("running");
    setAnswer(() => sample(WORDS));
  };

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput
        words={guessList}
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <KeyBoard guessList={guessList} answer={answer} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
      {(gameStatus === "won" || gameStatus === "lost") && (
        <button className={`restart ${gameStatus}`} onClick={handleResatart}>restart</button>
      )}
    </>
  );
}

export default Game;

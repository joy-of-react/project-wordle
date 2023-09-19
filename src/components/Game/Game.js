import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import Guesses from "../Guesses/Guesses";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);

  const gameIsWon =
    guesses.filter((guess) => guess === answer).length > 0 ? true : false;

  const nonEmptyGuesses = guesses.filter((guess) => guess.length === 5);

  const gameLost = nonEmptyGuesses.length === 6 && gameIsWon === false;

  return (
    <>
      {(gameLost || gameIsWon) && (
        <button
          type="reset"
          onClick={() => {
            setGuesses([]);
            setAnswer(() => sample(WORDS));
          }}
        >
          Reset
        </button>
      )}
      <Guesses guesses={guesses} answer={answer} />
      <Input setGuesses={(guess) => setGuesses([...guesses, guess])} />
      {gameLost && <Banner type="sad" answer={answer} />}
      {gameIsWon && <Banner type="happy" guesses={nonEmptyGuesses.length} />}
    </>
  );
}

export default Game;

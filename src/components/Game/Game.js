import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import Guesses from "../Guesses/Guesses";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Input setGuesses={(guess) => setGuesses([...guesses, guess])} />
      {guesses.filter((guess) => guess === answer).length > 0 ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {guesses.filter((x) => x.length === 5).length > 0
                ? guesses.filter((x) => x.length === 5).length === 1
                  ? " 1 guess"
                  : ` ${guesses.filter((x) => x.length === 5).length} guesses`
                : ""}
            </strong>
            .
          </p>
        </div>
      ) : (
        guesses.length >= 6 && (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        )
      )}
    </>
  );
}

export default Game;

function checkIfWordIsCorrect(word, answer) {}

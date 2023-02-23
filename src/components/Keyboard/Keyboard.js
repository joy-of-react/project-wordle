import React, { useEffect } from "react";
import { alphabet } from "./helper";
import { checkGuess } from "../../game-helpers";

function Keyboard({ answer, submittedGuesses }) {
  const guessValidate = checkGuess(submittedGuesses?.guess, answer);

  useEffect(() => {
    console.log(guessValidate);
  }, [submittedGuesses]);

  return (
    <p className="alphabet">
      {alphabet.map((letter) => {
        return (
          <span className="letter correct">
            {letter} {letter === "K" && <br />}{" "}
          </span>
        );
      })}
    </p>
  );
}

export default Keyboard;

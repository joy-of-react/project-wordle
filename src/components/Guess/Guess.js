import React from "react";
import { range } from "../../utils";
import { answer } from "../Game/Game";
import { checkGuess } from "../../game-helpers";

function Guess({ value }) {
  // const answerValue = answer.answer;
  const checkResult = checkGuess(value, answer);

  return (
    <>
      {/* <p className="guess">
        {range(5).map((index) => (
          <span className="cell" key={index}>
            {value ? value[index] : undefined}
          </span>
        ))}
      </p> */}
      <p className="guess">
        {checkResult
          ? checkResult.map(({ letter, status }, index) => (
              <span
                className={`cell ${
                  status === "correct"
                    ? "correct"
                    : status === "incorrect"
                    ? "incorrect"
                    : "misplaced"
                }`}
                key={index}
              >
                {letter}
              </span>
            ))
          : range(5).map((index) => <span className="cell" key={index}></span>)}
      </p>
    </>
  );
}

export default Guess;

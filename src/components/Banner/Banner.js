import React from "react";
import { GAME_STATUS_LOST, GAME_STATUS_WIN } from "../../constants";

function Banner({ gameStatus, answer, numOfAnswers }) {
  return (
    <div
      className={`${gameStatus === GAME_STATUS_WIN && "happy"} ${
        gameStatus === GAME_STATUS_LOST && "sad"
      } banner`}
    >
      <p>
        {gameStatus === GAME_STATUS_WIN && (
          <>
            <strong>Congratulations!</strong>{" "}
            <strong>Got it in {numOfAnswers}</strong>
          </>
        )}
        {gameStatus === GAME_STATUS_LOST && (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>
          </>
        )}
      </p>
    </div>
  );
}

export default Banner;

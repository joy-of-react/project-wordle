import React from "react";

function EndingBanner({ gameIsOver, numOfGuesses, answer }) {
  const { isGameOver, status } = gameIsOver;
  if (isGameOver && status === "correct") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in{" "}
          <strong>{numOfGuesses} guesses</strong>
        </p>
      </div>
    );
  } else if (isGameOver && status === "incorrect") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      </div>
    );
  }
}

export default EndingBanner;

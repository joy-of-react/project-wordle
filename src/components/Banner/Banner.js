import React from "react";

function Banner({ victory, numberOfGuesses, correctAnswer, resetGame }) {
  return (
    <div className={`${victory ? "happy" : "sad"} banner`}>
      {victory ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numberOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{correctAnswer}</strong>.
        </p>
      )}
      <button onClick={resetGame}>Reset game</button>
    </div>
  );
}

export default Banner;

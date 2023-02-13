import React from "react";

function Banner({ hasFinishedGame, hasWon, attempts, answer }) {

  const displayBanner = (hasFinishedGame, hasWon) => {
    if (hasFinishedGame && hasWon) {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{attempts.length} guesses</strong>.
          </p>
        </div>
      );
    }
    if (hasFinishedGame && !hasWon) {
      return (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      );
    }
  };


  return (
    <>
      {displayBanner(hasFinishedGame, hasWon)}
    </>
  );
}

export default Banner;

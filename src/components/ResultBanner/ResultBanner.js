import React from "react";

function ResultBanner({ gameWon, numGuesses, answer, resetGame }) {
  if (gameWon) {
    return (
      <div style={{ display: "flex", direction: "row", gap: "8px" }}>
        <div className="banner happy">
          {`You won in ${numGuesses} guesses!`}{" "}
          <button onClick={resetGame}>Reset</button>
        </div>{" "}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", direction: "row", gap: "8px" }}>
      <div className="banner sad">
        {`Sorry, you lost! The word is ${answer}.`}{" "}
        <button onClick={resetGame}>Reset</button>
      </div>{" "}
    </div>
  );
}

export default ResultBanner;

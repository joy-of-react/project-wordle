import React from "react";

import Guess from "../Guess";

function GuessResults({ letters, answer }) {
  return (
    <div className="guess-results">
      <Guess letters={letters} answer={answer} />
    </div>
  );
}

export default GuessResults;

import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <stong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </stong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;

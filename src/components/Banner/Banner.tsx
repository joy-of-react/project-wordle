import React from "react";
import { GuessResults } from "../../types";

type BannerProps = {
  variant: "happy" | "sad";
  guessResults: GuessResults;
  answer: string;
};

function Banner({ variant, guessResults, answer }: BannerProps) {
  if (!variant) {
    return null;
  }

  const guessCount = ` ${guessResults?.length} ${
    guessResults.length > 1 ? "guesses" : "guess"
  }`;

  return (
    <div className={`${variant} banner`}>
      {variant === "happy" && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guessCount}</strong>
        </p>
      )}

      {variant === "sad" && (
        <p>
          Sorry, the correct answer is<strong> {answer}</strong>
        </p>
      )}
    </div>
  );
}

export default Banner;

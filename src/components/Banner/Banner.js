import React from "react";

function Banner({ answerStatus, answer, guesses }) {
  let bannerStatus;

  if (answerStatus === "won") {
    bannerStatus = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses.length} guesses</strong>.
        </p>
      </div>
    );
  } else if (answerStatus === "lost") {
    bannerStatus = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return <div>{bannerStatus}</div>;
}

export default Banner;

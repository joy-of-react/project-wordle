import React from "react";

function Banner({ gameStatus, answer, guesses }) {
  let bannerStatus;

  if (gameStatus === "won") {
    bannerStatus = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
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

import React from "react";

function Banner({ type, answer = "", guesses = 6 }) {
  if (type === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {guesses} {guesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (type === "sad") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
  return;
}

export default Banner;

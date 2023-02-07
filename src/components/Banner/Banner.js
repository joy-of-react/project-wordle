import React from "react";

function Banner({ answer, guesses, winner }) {
  const className = winner ? "happy banner" : "sad banner";

  return (
    <div className={className}>
      <p>
        {winner ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses} guesses</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default Banner;

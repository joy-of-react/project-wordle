import React from "react";

function Status({ state, answer }) {
  return (
    <>
      {state === "won" ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      ) : state === "lose" ? (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Status;

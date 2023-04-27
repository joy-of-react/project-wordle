import React from "react";

function Banner({ count, victory, answer }) {
  const victoryBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {count} guesses</strong>.
      </p>
    </div>
  );

  const failureBanner = (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  );

  return (
    victory ? victoryBanner : failureBanner
  );
}

export default Banner;

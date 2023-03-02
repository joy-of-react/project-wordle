import React from "react";

import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={guess ? `cell ${guess[num].status}` : "cell"}>
          {guess ? guess[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

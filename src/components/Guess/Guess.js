import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letters = Array.from({ length: 5 }, () => ({
    letter: "",
    status: "",
    id: crypto.randomUUID(),
  }));

  if (guess && guess.guess !== undefined) {
    const results = checkGuess(guess.guess, answer);

    results.forEach((result, index) => {
      letters[index].letter = result.letter;
      letters[index].status = result.status;
    });
  }

  return (
    <p className="guess">
      {letters.map(({ letter, status, id }) => (
        <span key={id} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

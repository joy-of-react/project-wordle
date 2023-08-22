import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results" role="list">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess key={index} guess={guesses[index]} answer={answer} />;
      })}
    </div>
  );
}

export default Guesses;

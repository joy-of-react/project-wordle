import React from "react";

import { range } from "../../utils";

function Guess({ guess, answer }) {
  return (
    <div className="guess">
      {range(5).map((index) => {
        return <div className="cell" key={index}></div>;
      })}
    </div>
  );
}

export default Guess;

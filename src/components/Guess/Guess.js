import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span className="cell" key={i}>
            {value?.split("")[i]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

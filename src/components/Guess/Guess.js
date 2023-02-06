import React from "react";
import { range } from "../../utils";

function Guess({ value, checked }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={checked === null ? "cell" : `cell ${checked[num].status}`}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

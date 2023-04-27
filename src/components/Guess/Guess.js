import React from "react";
import { range } from "../../utils";

function Guess({ letters }) {
  return (
    <p className="guess" key={crypto.randomUUID()}>
    {
      range(0, 5).map((idx) => (
        <span className={`cell ${letters[idx]?.status}`} key={idx}>
          {letters[idx]?.letter || ''}
        </span>
      ))
    }
    </p>
  );
}

export default Guess;

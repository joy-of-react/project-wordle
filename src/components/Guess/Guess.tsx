import React from "react";
import { range } from "../../utils";

const Cell = ({ value }) => <span className="cell">{value}</span>;

function Guess({ guess }) {
  return (
    <div className="guess">
      {range(5).map((i) => (
        <Cell key={`cell-${i}`} value={guess?.[i]} />
      ))}
    </div>
  );
}

export default Guess;

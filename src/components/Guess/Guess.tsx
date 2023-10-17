import React from "react";
import { range } from "../../utils";

type CellProps = {
  value: string;
};

function Cell({ value }: CellProps) {
  return <span className="cell">{value}</span>;
}

type GuessProps = {
  guess: string;
};

function Guess({ guess }: GuessProps) {
  return (
    <div className="guess">
      {range(5).map((i: number) => (
        <Cell key={`cell-${i}`} value={guess?.[i]} />
      ))}
    </div>
  );
}

export default Guess;

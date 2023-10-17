import React from "react";
import { range } from "../../utils";
import { CheckedGuess } from "../../types";

type CellProps = {
  value: string;
  status: string;
};

function Cell({ value, status = "" }: CellProps) {
  return <span className={`cell ${status}`}>{value}</span>;
}

type GuessProps = {
  guess: string;
  checkedGuess: CheckedGuess[];
};

function Guess({ guess, checkedGuess }: GuessProps) {
  return (
    <div className="guess">
      {range(5).map((i: number) => (
        <Cell
          key={`cell-${i}`}
          value={guess?.[i]}
          status={checkedGuess?.[i]?.status}
        />
      ))}
    </div>
  );
}

export default Guess;

import React from "react";

function Guess({ gridData }) {
  return (
    <div className="guess-results">
      {gridData.map((row, index) => (
        <p className="guess" key={index}>
          {row.map(({ letter, status }, index) => (
            <span className={"cell " + status} key={index}>
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;

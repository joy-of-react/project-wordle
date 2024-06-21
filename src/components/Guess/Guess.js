import React from "react";

import { range } from "../../utils";

function Guess({ value }) {

  return (
    // <div>
    //   {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
    //     <p className="guess" key={rowIndex}>
    //       {guesses[rowIndex]
    //         ? guesses[rowIndex].split("").map((char, index) => (
    //             <span className="cell" key={index}>
    //               {char}
    //             </span>
    //           ))
    //         : range(5).map((cellIndex) => (
    //             <span className="cell" key={cellIndex}></span>
    //           ))}
    //     </p>
    //   ))}
    // </div>
    <p className="guess">
      {value ? value.split("").map((char, index) => (
        <span className="cell" key={index}>{char}</span>
      )) : range(5).map(cellIndex => (
        <span className="cell" key={cellIndex}></span>
      ))
      }
    </p>
  );
}

export default Guess;

import React from "react";

function Attempts({ attempts }) {
  return (
    <section className="guess-results">

      {attempts.map((word, index) => {
        return (

          <p className="guess" key={index}>{word}</p>

        )
      })}
    </section>
  );
}

export default Attempts;

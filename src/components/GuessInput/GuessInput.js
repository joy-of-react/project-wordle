import React from "react";

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  // const 

  return <form class="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`Guess is ${guess}`);
        setGuess("");
      }}
    >
    <label for="guess-input">Enter guess:</label>
    <input 
      onChange={(e) => {
        setGuess(e.target.value.toUpperCase())
      }}
      pattern="[A-Z]{5}"
      value={guess}
      id="guess-input" type="text" />
  </form>;
}

export default GuessInput;

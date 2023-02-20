import React from "react";

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  // const 

  return <form class="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`Guess is ${guess}`);
      }}
    >
    <label for="guess-input">Enter guess:</label>
    <input 
      onChange={(e) => {
        setGuess(e.target.value.toUpperCase())
      }}
      value={guess}
      id="guess-input" type="text" />
  </form>;
}

export default GuessInput;

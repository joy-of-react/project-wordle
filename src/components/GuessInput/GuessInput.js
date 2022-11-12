import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function submitGuess(event) {
    event.preventDefault();

    if(guess.length !== 5) {
      window.alert('Guess must be 5 letters');
      return;
    };

    console.log(guess.toUpperCase());
    setGuess("");
  };

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => submitGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess.toUpperCase()} 
        onChange={(event) => setGuess(event.target.value)}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
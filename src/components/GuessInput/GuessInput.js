import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function submitGuess(event) {
    event.preventDefault();

    if(guess.length !== 5) {
      window.alert('Guess must be 5 letters');
      return;
    };

    console.log({ guess });
    setGuess("");
  };

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => submitGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        id="guess-input" 
        type="text" 
        value={guess} 
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
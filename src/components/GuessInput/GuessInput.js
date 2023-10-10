import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleInput = (event) => {
    event.preventDefault();
    if (guess.length < 1) return;
    console.log("Guess Input: ", guess);
    setGuess("");
  };

  return (
    <form
      onSubmit={(event) => handleInput(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern=".{5}"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;

import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess">Enter guess:</label>
      <br />
      <input
        id="guess"
        name="guess"
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        maxLength={5}
        pattern="[A-Z]{5}"
        required
      />
    </form>
  );
}

export default GuessInput;

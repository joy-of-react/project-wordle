import React from "react";

function GuessInput({ inputSubmit, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <div>
      <span>This is the game!</span>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          inputSubmit(guess);
          setGuess("");
        }}>
        <label htmlFor="guess-input">What's your guess?</label>
        <input
          required
          id="guess-input"
          disabled={disabled}
          maxLength={5}
          type="text"
          pattern="[A-Za-z]{5}"
          title="Must be exactly 5 letters, and only use letters! "
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;

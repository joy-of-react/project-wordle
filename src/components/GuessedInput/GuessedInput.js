import React from "react";

function GuessedInput({ handleSubmitGuess, disableAttempts }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  function handleInputChange(e) {
    setTentativeGuess(e.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        name="guess-input"
        value={tentativeGuess}
        onChange={handleInputChange}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disableAttempts}
      />
    </form>
  );
}

export default GuessedInput;

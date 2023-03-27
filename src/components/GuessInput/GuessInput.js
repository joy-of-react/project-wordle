import React from "react";

function GuessInput({ handleSubmitGuess, answerStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  // Feels kind of weird to me not to have the handleSubmitGuess function defined here.

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={answerStatus !== "running" ? true : false}
        pattern=".{5,}"
        required
        title="5 characters minimum"
        maxLength={5}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

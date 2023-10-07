import React from "react";

function GuessInput({ addGuess }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    addGuess(input);
    setInput("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern=".{5}"
          maxLength={5}
          title="5 letter word"
          required
          value={input}
          onChange={(event) => setInput(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;

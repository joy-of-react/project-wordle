import React from "react";

function GuessInput() {
  const [input, setInput] = React.useState("");
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ input });
          setInput("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          required
          type="text"
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={input}
          onChange={(event) => setInput(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;

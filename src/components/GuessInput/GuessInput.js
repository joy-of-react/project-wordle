import React from "react";

function GuessInput() {
  const [input, setInput] = React.useState("");
  function 
  return (
    <div>
      <form className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5}"
          title="please enter 5 letters"
          aria-label="guess word input"
          value={input}
          onChange={(event) => {
            setInput((event.target.value).toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;

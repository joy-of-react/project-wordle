import { useState } from "react";

function GuessInput() {
  const [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ answer: text });
    setText("");
  }

  function handleTextChange(event) {
    const value = event.currentTarget.value.toUpperCase();
    setText(value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        onChange={handleTextChange}
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={text}
      />
    </form>
  );
}

export default GuessInput;

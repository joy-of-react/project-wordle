import React from "react";

function GuessInput() {
  const [input, setInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // const isValid = input.length === 5;
    // if (!isValid) {
    //   return;
    // }
    console.log(input);
    setInput("");
  }

  function handleChange(event) {
    const newValue = event.target.value.toUpperCase();
    if (newValue.length <= 5) {
      setInput(newValue);
    }
    if (newValue.length === 5) {
      setTimeout(() => {
        console.log(newValue);
        setInput("");
      }, 0);
    }
  }

  return (
    <div>
      <form className="guess-input-wrapper" >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5}"
          title="please enter 5 letters"
          aria-label="guess word input"
          maxLength={5}
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default GuessInput;

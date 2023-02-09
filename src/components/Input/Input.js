import React from "react";

function Input() {

  const [input, setInput] = React.useState('');
  const [attempts, setAttempts] = React.useState([]);

  return (
    <>
      your guesses: {attempts.join(" ")}
      <form
        className="guess-input-wrapper"
        onSubmit={
          (event) => {
            event.preventDefault();
            const nextAttempts = [...attempts];
            nextAttempts.push(input);
            setAttempts(nextAttempts);
            setInput('');
          }
        }>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
        />
      </form>
    </>);
}

export default Input;

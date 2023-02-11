import React from "react";

function Input({ attempts, setAttempts }) {

  const [input, setInput] = React.useState("");
  const [guessObject, setGuessObject] = React.useState({ guess: "" });

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={
          (event) => {
            event.preventDefault();

            if (input.length !== 5) {
              return;
            }

            const nextAttempts = [...attempts];
            nextAttempts.push(input);
            setAttempts(nextAttempts);


            const nextGuessObject = structuredClone(guessObject);
            nextGuessObject.guess = input;
            setGuessObject(nextGuessObject);
            console.log("next guess object is:");
            console.log(nextGuessObject);
            setInput("");

          }
        }>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          maxLength={5}
          minLength={5}
          onChange={event => {
            setInput((event.target.value).toUpperCase());
          }}
        />
      </form>
    </>);
}

export default Input;

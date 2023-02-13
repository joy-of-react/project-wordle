import React from "react";

function Input({ attempts, setAttempts, setHasWon, setHasFinishedGame, answer, maxGuesses }) {

  const [input, setInput] = React.useState("");
  const [guessObject, setGuessObject] = React.useState({ guess: "" });

  const checkAnswer = (guess) => {
    if (guess === answer) {
      setHasWon(true);
      setHasFinishedGame(true);

    }
    if ((guess !== answer) && (attempts.length < maxGuesses)) {
      setHasWon(false);
      setHasFinishedGame(false);
    }
    if ((guess !== answer) && (attempts.length === maxGuesses - 1)) {
      setHasWon(false);
      setHasFinishedGame(true);
    }
  };

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={
          (event) => {
            event.preventDefault();

            const nextAttempts = [...attempts];
            nextAttempts.push(input);
            setAttempts(nextAttempts);


            const nextGuessObject = structuredClone(guessObject);
            nextGuessObject.guess = input;
            setGuessObject(nextGuessObject);
            console.log("next guess object is:");
            console.log(nextGuessObject);
            setInput("");

            checkAnswer(input);
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

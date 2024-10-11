import React from "react";

function GuessForm({ AddHandler, result }) {
  const [guess, setGuess] = React.useState("");
  const [state, setState] = React.useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert("Word must be 5 character long!");
      return;
    }
    console.log({ guess });
    AddHandler(guess);
    setGuess("");
  };
  React.useEffect(() => {
    if (result === "loading") {
      setState(false);
    } else {
      setState(true);
    }
  }, [result]);

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>

      {!state && (
        <input
          id="guess-input"
          type="text"
          value={guess}
          minLength={5}
          maxLength={5}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
        />
      )}
    </form>
  );
}

export default GuessForm;

import React from "react";

function GuessInput({ handleGuess }) {
  const [input, setInput] = React.useState('');

  function submitGuess() {
    if (input.length === 5) {
      handleGuess(input);
    } else {
      window.alert("Invalid Guess. Must be 5 Characters");
    }
  }

  return <form className="guess-input-wrapper"
               onSubmit={(event) => {
                 event.preventDefault();
                 submitGuess();
                 setInput('');
               }}
    >
    <label htmlFor="guess-input">Enter Guess - 5 Alphanumeric Chars</label>
    <input type="text"
           id="guess-input"
           pattern="\w{5}"
           value={input}
           onChange={(e) => setInput((e.target.value).toUpperCase())}></input>
    <p>{input}</p>
    </form>;
}

export default GuessInput;

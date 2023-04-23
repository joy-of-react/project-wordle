import React from "react";

function UserInput({ gameStatus, handleSubmitGuess }) {
  const [userGuess, setUserGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(userGuess);

    setUserGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="user-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={userGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setUserGuess(nextGuess);
        }}
        id="user-input"
        type="text"
      />
    </form>
  );
}

export default UserInput;

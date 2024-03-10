import React from "react";

function Input({ disabled, setHistoryStack }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={handleChange}
        disabled={disabled}
        id="guess-input"
        minLength="5"
        maxLength="5"
        type="text"
      />
    </form>
  );

  function handleChange(event) {
    const string = event.target.value;

    if (string.length === 0) return void(setGuess(""));

    if (!isEnglishLetter(string.at(-1))) return;

    setGuess(string.toUpperCase()); // FIXME: 一旦启用了大写，那么输入框的min/maxlength属性就会故障
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) return;

    setGuess("");
    setHistoryStack((prev) => [...prev, guess]); // FIXME: 此处无法保证解构prev后所得到的元素是不会突变的
    console.log({ guess });
  }
}

function isEnglishLetter(letter) {
  return Boolean("abcdefghijklmnopqrstuvwxyz".includes(letter.toLowerCase()));
}

export default Input;

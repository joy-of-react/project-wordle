import React from "react";

const GuessInput = () => {
  return (
    <form className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input type="text" name="guess-input" id="guess-input" />
    </form>
  );
}

export default GuessInput;

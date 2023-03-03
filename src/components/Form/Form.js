import React from 'react';

function Form() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(value);
    setValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={handleChange}
        pattern={"[a-zA-Z]{5}"}
        maxLength={5}
        required
      />
    </form>
  );
}

export default Form;

import React from 'react'

function WordInput({ setSubmittedGuesses }) {
  const [inputValue, setInputValue] = React.useState('')

  function onChange(e) {
    if (e.target.value.length > 5) return

    setInputValue(e.target.value.toUpperCase())
  }

  function onSubmit(e) {
    e.preventDefault()
    setSubmittedGuesses((prevWords) => [
      ...prevWords,
      { guess: inputValue, id: crypto.randomUUID() },
    ])
    setInputValue('')
  }

  return (
    <form class="guess-input-wrapper" onSubmit={onSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        value={inputValue}
        onChange={onChange}
        id="guess-input"
        type="text"
      />
    </form>
  )
}

export default WordInput

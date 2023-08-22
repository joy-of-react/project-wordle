import React from "react"

const Form = () => {
  const [guess, setGuess] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(guess)
    setGuess("")
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase())
        }}
        minLength="5"
        maxLength="5"
        pattern="[A-Za-z]{5}"
      />
    </form>
  )
}

export default Form

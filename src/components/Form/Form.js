import React from "react"

const Form = ({ addGuess }) => {
  const [guess, setGuess] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (guess.length !== 5) {
      alert("Please enter 5 characters ❤️")
      return
    }
    console.log({ guess })
    addGuess(guess)
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
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        required
      />
    </form>
  )
}

export default Form

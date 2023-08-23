import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import Form from "../Form"
import GuessList from "../GuessList"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const addGuess = (guess) => {
    const newGuess = {
      id: crypto.randomUUID(),
      guess
    }
    const nextGuess = [...guesses, newGuess]
    setGuesses(nextGuess)
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <Form addGuess={addGuess} />
    </>
  )
}

export default Game

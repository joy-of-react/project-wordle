import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessesBoard from '../GuessesBoard'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameOver, setGameOver] = React.useState(false)

  const handleSubmitGuess = guessInput => {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    }
    const nextGuesses = [...guesses, newGuess]

    if (nextGuesses.length <= NUM_OF_GUESSES_ALLOWED) setGuesses(nextGuesses)
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) setGameOver(true)
  }
  return (
    <>
      {gameOver && <p>Game Over</p>}
      <GuessesBoard guesses={guesses} />
      <GuessInput onSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game

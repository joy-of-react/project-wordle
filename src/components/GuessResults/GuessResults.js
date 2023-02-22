import React from 'react'
import { range } from '../../utils'

function GuessResults({ submittedGuesses }) {
  const arrayToMapOver = range(0, 6)

  return (
    <div class="guess-results">
      {arrayToMapOver.map((_, index) => (
        <p class="guess" key={submittedGuesses[index]?.id}>
          <span class="cell">{submittedGuesses[index]?.guess[0]}</span>
          <span class="cell">{submittedGuesses[index]?.guess[1]}</span>
          <span class="cell">{submittedGuesses[index]?.guess[2]}</span>
          <span class="cell">{submittedGuesses[index]?.guess[3]}</span>
          <span class="cell">{submittedGuesses[index]?.guess[4]}</span>
        </p>
      ))}
    </div>
  )
}

export default GuessResults

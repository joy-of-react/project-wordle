import React from 'react'
import { WORD_LENGTH } from '../../constants'
import { range } from '../../utils'

function GuessRow({ guess }) {
  return (
    <p className='guess'>
      {range(WORD_LENGTH).map((_, colIndex) => (
        <span className='cell' key={colIndex}>
          {guess?.[colIndex]}
        </span>
      ))}
    </p>
  )
}

export default GuessRow

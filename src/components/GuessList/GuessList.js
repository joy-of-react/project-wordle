export const GuessList = ({ guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => (
        <p
          key={id}
          className="guess"
        >
          {guess}
        </p>
      ))}
    </div>
  )
}

export default GuessList

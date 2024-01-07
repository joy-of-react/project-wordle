function PreviousGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={guess.id}>
          {guess.guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;

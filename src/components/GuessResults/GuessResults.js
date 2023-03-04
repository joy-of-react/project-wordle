function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.length > 0 &&
        guesses.map((guess) => (
          <p className="guess" key={crypto.randomUUID()}>
            {guess}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.length &&
        results.map((result) => (
          <p className="guess" key={crypto.randomUUID()}>
            {result}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;

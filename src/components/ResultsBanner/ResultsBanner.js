function ResultsBanner({ answer, gameResult, numOfGuesses, resetGame }) {
  const pluralGuesses = numOfGuesses > 1;
  return gameResult === 'win' ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses} guess{pluralGuesses ? 'es' : ''}
        </strong>
        .
      </p>
      <button onClick={resetGame}>
        <strong>Play Again?</strong>
      </button>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={resetGame}>
        <strong>Play Again?</strong>
      </button>
    </div>
  );
}

export default ResultsBanner;

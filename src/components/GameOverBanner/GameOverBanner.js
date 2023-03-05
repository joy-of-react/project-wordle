function GameOverBanner({ isGameWon, numOfGuesses, answer }) {
  const className = isGameWon() ? 'happy banner' : 'sad banner';

  return (
    <div className={className}>
      <p>
        {isGameWon() ? (
          <>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default GameOverBanner;

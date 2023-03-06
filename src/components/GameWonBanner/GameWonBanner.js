import Banner from '../Banner';

function GameWonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default GameWonBanner;

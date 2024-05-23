import { GameStatus } from '../../constants';

function Banner({ gameStatus, numOfAttempts, answer }) {
  if (gameStatus === GameStatus.playing) {
    return null;
  }

  return gameStatus === GameStatus.win ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{numOfAttempts} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const guessResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num, index) => (
        <Cell
          key={index}
          letter={guessResult ? guessResult[num].letter : ''}
          status={guessResult ? guessResult[num].status : ''}
        />
      ))}
    </p>
  );
}

export default Guess;

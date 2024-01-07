import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, LETTERS_PER_WORD } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({ answer, guesses }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((row) => {
        let rowContents;
        if (guesses[row]) {
          rowContents = checkGuess(guesses[row].guess, answer);
        } else {
          rowContents = Array(LETTERS_PER_WORD).fill({
            letter: '',
            status: ''
          });
        }
        return (
          <p className="guess" key={row}>
            {rowContents.map((guess, i) => (
              <span className={`cell ${guess.status}`} key={i}>
                {guess.letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;

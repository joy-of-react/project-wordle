import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('inGame'); // "inGame", "won", "lost"

  function handleSubmitGuess(tentativeGuess) {
    setWords([
      ...words,
      { label: tentativeGuess, tentativeGuess, id: crypto.randomUUID() },
    ]);
    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (words.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lost');
    }
  }

  console.log(answer);

  return (
    <>
      <GuessResults words={words} answer={answer} />

      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <Banner status="happy">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {words.length === 1 ? '1 guess' : `${words.length} guesses`}
            </strong>
            .
          </p>
        </Banner>
      )}
      {gameStatus === 'lost' && (
        <Banner status="sad" answer={answer}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;

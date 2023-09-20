import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../KeyBoard';
import Banner from '../Banner';
import NewGameBtn from '../NewGameBtn';

function Game() {
  const [words, setWords] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('inGame'); // "inGame", "won", "lost"
  const [answer, setAnswer] = React.useState(sample(WORDS));

  function handleSubmitGuess(tentativeGuess) {
    setWords([...words, tentativeGuess]);
    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (words.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lost');
    }
  }
  function handleRestart() {
    let newAnswer = sample(WORDS);
    while (newAnswer === answer) newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setWords([]);
    setGameStatus('inGame');
  }

  const validatedGuesses = words.map(word => checkGuess(word, answer));
  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />

      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <Keyboard validatedGuesses={validatedGuesses} />

      {gameStatus === 'won' && (
        <Banner status="happy">
          <p>
            <strong>Congratulations!</strong> You got it in{' '}
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

      <NewGameBtn handleRestart={handleRestart} gameStatus={gameStatus} />
    </>
  );
}

export default Game;

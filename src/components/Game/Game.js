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
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmitGuess(tentativeGuess) {
    setWords([...words, tentativeGuess]);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (words.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lost');
    }
    // setTentativeGuess('');
  }
  function handleRestart() {
    let newAnswer = sample(WORDS);
    while (newAnswer === answer) newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setWords([]);
    setGameStatus('inGame');
  }

  function onChar(value) {
    if (gameStatus !== 'inGame') return;
    //TODO: Add error message
    if (tentativeGuess.length === 5) return;
    setTentativeGuess(tentativeGuess => tentativeGuess + value);
  }

  function onEnter() {
    if (gameStatus !== 'inGame') return;
    //TODO: Add error message
    if (tentativeGuess.length < 5) return;
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  function onDelete() {
    if (gameStatus !== 'inGame') return;
    if (tentativeGuess.length === 0) return;
    const newTentativeGuess = tentativeGuess.slice(0, -1);
    setTentativeGuess(newTentativeGuess);
  }

  const validatedGuesses = words.map(word => checkGuess(word, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />

      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
      />
      <Keyboard
        validatedGuesses={validatedGuesses}
        onEnter={onEnter}
        gameStatus={gameStatus}
        onChar={onChar}
        onDelete={onDelete}
      />

      {gameStatus === 'won' && (
        // {true && (
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

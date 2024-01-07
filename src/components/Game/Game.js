import { useState } from 'react';
import Guess from '../Guess';
import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard/Keyboard';
import ResultsBanner from '../ResultsBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// import PreviousGuesses from '../PreviousGuesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);

  const [gameResult, setGameResult] = useState('');
  const [guessedLetters, setGuessedLetters] = useState({});

  const addNewGuess = (newGuess) => {
    const guessAccuracy = checkGuess(newGuess, answer);
    let newGuessedLetters = { ...guessedLetters };
    for (let i = 0; i < guessAccuracy.length; i++) {
      // if it doesn't already exist or is correct, save it
      if (
        !newGuessedLetters[guessAccuracy[i].letter] ||
        guessAccuracy[i].status === 'correct'
      ) {
        newGuessedLetters[guessAccuracy[i].letter] = guessAccuracy[i].status;
        // if the status is currently incorrect and now the status is misplaced, save it
      } else if (
        newGuessedLetters[guessAccuracy[i].letter] === 'incorrect' &&
        guessAccuracy[i].status === 'misplaced'
      ) {
        newGuessedLetters[guessAccuracy[i].letter] = guessAccuracy[i].status;
      }
    }
    setGuessedLetters(newGuessedLetters);

    const newGuessList = [
      ...guesses,
      {
        id: crypto.randomUUID(),
        guess: newGuess
      }
    ];
    setGuesses(newGuessList);
    // check for end game conditions
    if (newGuess === answer) {
      setGameResult('win');
    }
    if (newGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult('lose');
    }
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameResult('');
    setGuessedLetters({});
  };

  return (
    <>
      {/* <PreviousGuesses guesses={guesses} /> */}
      <Guess guesses={guesses} answer={answer} />
      {gameResult.length > 0 && (
        <ResultsBanner
          gameResult={gameResult}
          answer={answer}
          numOfGuesses={guesses.length}
          resetGame={resetGame}
        />
      )}
      <GuessInput
        addNewGuess={addNewGuess}
        disabled={gameResult ? true : false}
      />
      <Keyboard guessedLetters={guessedLetters} />
    </>
  );
}

export default Game;

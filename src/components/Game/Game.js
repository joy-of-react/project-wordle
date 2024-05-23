import React from 'react';
import { range, sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, GameStatus } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess';
import Banner from '../Banner';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GameStatus.playing);
  const [isGameOver, setIsGameOver] = React.useState(false);

  function handleAddNewGuess(guess) {
    const newGuess = {
      guess,
      status: checkGuess(guess, answer),
      id: crypto.randomUUID(),
    };
    const updatedGuesses = [...userGuesses, newGuess];
    setUserGuesses(updatedGuesses);
    checkGameStatus(updatedGuesses.length, guess);
  }

  function checkGameStatus(attempts, lastGuess) {
    if (attempts >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GameStatus.lost);
      setIsGameOver(true);
    } else if (answer === lastGuess) {
      setGameStatus(GameStatus.win);
      setIsGameOver(true);
    }
  }

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => (
          <Guess
            key={index}
            guessResult={userGuesses[index]?.status}
          />
        ))}
      </div>
      <GuessInput onAddNewGuess={handleAddNewGuess} isGameOver={isGameOver} />
      <Banner
        gameStatus={gameStatus}
        numOfAttempts={userGuesses.length}
        answer={answer} />
    </>
  );
}

export default Game;

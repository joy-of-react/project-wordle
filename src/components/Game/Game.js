import React from 'react';

import Form from '../Form';
import GuessHistory from '../GuessHistory';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [history, setHistory] = React.useState([]);
  const [win, setWin] = React.useState(false);
  const [lose, setLose] = React.useState(false);

  const addToHistory = (guess) => {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guess,
    };
    
    const newHistory = [...history, newGuess];

    const letters = getLetters(newGuess);
    const winner = letters.length && letters.every(letter => letter.status === 'correct');
    if (winner) {
      setWin(true);
    }

    if (!winner && newHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setLose(true);
    }
    setHistory(newHistory);
  }

  const getLetters = (guess) => {
    return guess?.word ? checkGuess(guess.word, answer) : [];
  }

  return (
    <>
      {
        (win || lose) && <Banner count={history.length} victory={win} answer={answer} />
      }
      <GuessHistory
        history={history}
      />
      {
        range(0, NUM_OF_GUESSES_ALLOWED).map(idx => {
          const letters = getLetters(history[idx]);

          return <GuessResults answer={answer} letters={letters} key={idx}/>
        })
      }
      <Form
        addToHistory={addToHistory}
        gameOver={win || lose}
      />
    </>
  );
}

export default Game;

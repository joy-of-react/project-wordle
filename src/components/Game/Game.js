import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';
import Keyboard from '../Keyboard';

function Game() {
	const [answer, setAnswer] = useState(() => sample(WORDS));
	const [guesses, setGuesses] = useState([]);
	const [guessHistory, setGuessHistory] = useState({});
	const [status, setStatus] = useState([]);
	const [gameResult, setGameResult] = useState(null);
	const numOfGuesses = guesses.length;

	const checkResult = (guess) => {
		const correctAnswer = guess === answer;
		const gameOver = numOfGuesses === NUM_OF_GUESSES_ALLOWED - 1;

		if (correctAnswer) {
			setGameResult('win');
		}

		if (!correctAnswer && gameOver) {
			setGameResult('loose');
		}
	};

	const saveResult = (guess) => {
		// check game status
		const newStatus = checkGuess(guess, answer);

		// save new status
		setStatus((prevStatus) => [...prevStatus, newStatus]);

		// save status history
		// e.g. {A:correct, H:incorrect, L:incorrect}
		// answer rating: incorrect(0) -> misplaced(1) -> correct(2)
		// if there's a higher rated version of the letter in history, skip it
		// if there's no, or lower rated version of the letter in history, add/overwrite it

		// copy state object
		const newGuessHistory = { ...guessHistory };
		// answer rating
		const statusRating = ['incorrect', 'misplaced', 'correct'];

		// check each letter in new status
		newStatus.forEach(({ letter, status }) => {
			const letterInHistory = newGuessHistory?.[letter];

			// if letter is already in history
			if (!!letterInHistory) {
				// get the rating of the letter in history
				const prevRating = statusRating.indexOf(letterInHistory);

				// get the rating of the new letter
				const newRating = statusRating.indexOf(status);

				// if the new letter has better rating, replace it
				if (newRating > prevRating) {
					newGuessHistory[letter] = status;
				}
			} else {
				// if letter is not yet in history, add it
				newGuessHistory[letter] = status;
			}
		});

		// save new history in state
		setGuessHistory(newGuessHistory);
	};

	const handleGuessResults = (guess) => {
		const newGuesses = [...guesses, guess];
		setGuesses(newGuesses);

		// check wether game has ended
		checkResult(guess);

		// save status and history
		saveResult(guess);
	};

	const handleRestartGame = () => {
		const newAnswer = sample(WORDS);
		setAnswer(newAnswer);
		setGuesses([]);
		setGuessHistory({});
		setStatus([]);
		setGameResult(null);
	};

	// To make debugging easier, we'll log the solution in the console.
	console.info({ answer });

	return (
		<>
			<GuessResults status={status} />
			<GuessInput handleGuessResults={handleGuessResults} disabled={!!gameResult} />
			<Keyboard history={guessHistory} />
			{gameResult && (
				<GameOverBanner
					gameResult={gameResult}
					numOfGuesses={numOfGuesses}
					answer={answer}
					handleRestartGame={handleRestartGame}
				/>
			)}
		</>
	);
}

export default Game;


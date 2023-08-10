import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameResult, setGameResult] = useState();
	const numOfGuesses = guesses.length;

	const handleGuessResults = (guess) => {
		const newGuesses = [...guesses, guess];
		setGuesses(newGuesses);

		const correctAnswer = guess === answer;
		const gameOver = numOfGuesses === NUM_OF_GUESSES_ALLOWED - 1;

		if (correctAnswer) {
			setGameResult('win');
		}

		if (!correctAnswer && gameOver) {
			setGameResult('loose');
		}
	};

	return (
		<>
			<GuessResults answer={answer} results={guesses} />
			<GuessInput handleGuessResults={handleGuessResults} disabled={!!gameResult} />
			{gameResult === 'win' && <HappyBanner numOfGuesses={numOfGuesses} />}
			{gameResult === 'loose' && <SadBanner answer={answer} />}
		</>
	);
}

export default Game;


import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import BannerLose from "../BannerLose";
import BannerWin from "../BannerWin";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [gameStatus, setGameStatus] = React.useState("running"); // running | won | lost
	const [guesses, setGuesses] = React.useState([]);

	function handleSubmitGuess(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess.toUpperCase() === answer) {
			setGameStatus("won");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}

	return (
		<>
			<GuessResults
				guesses={guesses}
				answer={answer}
			/>
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				isDisabled={gameStatus !== "running"}
			/>
			{gameStatus === "lost" && <BannerLose answer={answer} />}
			{gameStatus === "won" && <BannerWin numOfGuesses={guesses.length} />}
		</>
	);
}

export default Game;

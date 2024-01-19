import React from "react";

function GuessInput({ handleSubmitGuess }) {
	const [tentativeGuess, setTentativeGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();

		handleSubmitGuess(tentativeGuess);

		setTentativeGuess("");
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="guess-input-wrapper"
		>
			<label htmlFor="guess-input">Enter guess (5 letter word):</label>
			<input
				id="guess-input"
				type="text"
				value={tentativeGuess}
				onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
				required
				minLength={5}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
			/>
		</form>
	);
}

export default GuessInput;

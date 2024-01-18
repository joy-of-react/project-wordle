import React from "react";

function GuessInput() {
	const [guess, setGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();

		console.log({ guess: guess });

		setGuess("");
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="guess-input-wrapper"
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guess}
				onChange={(event) => setGuess(event.target.value.toUpperCase())}
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

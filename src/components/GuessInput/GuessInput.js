import React, { useState } from 'react';

function GuessInput({ handleGuessResults, disabled }) {
	const [guess, setGuess] = useState('');

	const handleGuessChange = (e) => {
		const value = e.target.value.toUpperCase();
		setGuess(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleGuessResults(guess);
		setGuess('');
	};

	return (
		<form className='guess-input-wrapper' onSubmit={handleFormSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				required
				value={guess}
				onChange={handleGuessChange}
				minLength={5}
				maxLength={5}
				pattern='[a-zA-Z]{5}'
				disabled={disabled}
			/>
		</form>
	);
}

export default GuessInput;


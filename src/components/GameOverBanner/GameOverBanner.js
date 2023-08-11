import React from 'react';

function GameOverBanner({ gameResult, numOfGuesses, answer, handleRestartGame }) {
	return gameResult === 'win' ? (
		<div className='happy banner'>
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong> {numOfGuesses} guesses</strong>.
			</p>
			<button className='restart' onClick={handleRestartGame}>
				RESTART
			</button>
		</div>
	) : (
		<div className='sad banner'>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
			<button className='restart' onClick={handleRestartGame}>
				RESTART
			</button>
		</div>
	);
}

export default GameOverBanner;


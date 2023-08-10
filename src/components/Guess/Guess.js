import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ answer, guess }) {
	const cells = range(5);
	const status = checkGuess(guess, answer);

	return (
		<p className='guess'>
			{cells.map((cell) => (
				<span key={`cell-${cell}`} className={`cell ${status ? status[cell].status : ''}`}>
					{guess?.[cell]}
				</span>
			))}
		</p>
	);
}

export default Guess;


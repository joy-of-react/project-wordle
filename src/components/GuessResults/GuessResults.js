import React from 'react';

import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ status }) {
	const rows = range(NUM_OF_GUESSES_ALLOWED);

	return (
		<div className='guess-results'>
			{rows.map((row) => (
				<Guess key={`guess-${row}`} status={status?.[row]} />
			))}
		</div>
	);
}

export default GuessResults;


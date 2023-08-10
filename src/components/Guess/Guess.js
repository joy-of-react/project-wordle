import React from 'react';

import { range } from '../../utils';

function Guess({ status }) {
	const cells = range(5);

	return (
		<p className='guess'>
			{cells.map((cell) => (
				<span key={`cell-${cell}`} className={`cell ${status ? status[cell].status : ''}`}>
					{status?.[cell].letter}
				</span>
			))}
		</p>
	);
}

export default Guess;


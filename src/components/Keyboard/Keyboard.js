import React from 'react';

import Key from '../Key';
import { LETTERS } from '../../constants';

function Keyboard({ history }) {
	const keyboard = LETTERS.map((row, index) => {
		// create keys for the row, check if letter status is in history
		const letters = row.map((letter) => <Key key={`key-${letter}`} letter={letter} status={history?.[letter]} />);

		return (
			<div key={`row-${index}`} className='row'>
				{letters}
			</div>
		);
	});

	return <div className='keyboard'>{keyboard}</div>;
}

export default Keyboard;


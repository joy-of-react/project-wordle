import React from 'react';

function Key({ letter, status }) {
	return <span className={`key ${status ? status : ''}`}>{letter}</span>;
}

export default Key;


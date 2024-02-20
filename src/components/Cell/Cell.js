import React from 'react';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

export default Cell;

import React from 'react';

const Key = ({ classStr, children, gameStatus, onClick, value }) => {
  function handleClick(e) {
    onClick(value);
    e.currentTarget.blur();
  }
  return (
    <button
      className={classStr}
      disabled={gameStatus !== 'inGame'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default Key;

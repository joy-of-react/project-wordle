import React from 'react';

function Banner({ status, children }) {
  return <div className={`banner ${status}`}>{children}</div>;
}

export default Banner;

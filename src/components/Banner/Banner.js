import React from 'react';

function Banner({ variant, children }) {
  return (
    <div className={`${variant} banner`}>
      {children}
    </div>
  );
}

export default Banner;

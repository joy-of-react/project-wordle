import React from 'react';

import Banner from '../Banner/Banner';

function LoseBanner({ answer }) {
  return (
    <Banner variant='sad'>
      <p>Sorry, the correct answer was <strong>{answer}</strong>.</p>
    </Banner>
  );
}

export default LoseBanner;

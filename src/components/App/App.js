import React from 'react';
import Game from '../Game';
import Header from '../Header';

function App() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game guesses={guesses} setGuesses={setGuesses} />
      </div>
    </div>
  );
}

export default App;

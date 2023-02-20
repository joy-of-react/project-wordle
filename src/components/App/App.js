import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessInput />
      </div>
    </div>
  );
}

export default App;

import Game from "../Game";
import React from "react";
import Header from "../Header";
import {
  GAME_STATE_STARTED,
  GAME_STATE_WON,
  GAME_STATE_LOST,
} from "../../constants";

function App() {
  // gameState can be oneof: "started", "lost", "won"
  const [gameState, setGameState] = React.useState({
    state: GAME_STATE_STARTED,
    guesses: 0,
    answer: "",
  });

  console.log(gameState);

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game gameState={gameState} setGameState={setGameState} />

        {gameState.state === GAME_STATE_WON ? (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{gameState.guesses} guesses</strong>.
            </p>
          </div>
        ) : null}

        {gameState.state == GAME_STATE_LOST ? (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{gameState.answer}</strong>.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { HelpCircle } from 'react-feather';

import Modal from '../Modal';

const Header = () => {
  const [showHelpDialog, setShowHelpDialog] = React.useState(false);

  return (
    <header>
      <div className="side"></div>
      <h1>Word Game</h1>
      <div className="side">
        <button onClick={() => setShowHelpDialog(true)}>
          <span className="visually-hidden">View Information</span>
          <HelpCircle size={32} />
        </button>
      </div>

      <Modal
        title="About “Word Game”"
        isOpen={showHelpDialog}
        handleDismiss={() => setShowHelpDialog(false)}
      >
        <p>
          “Word Game” is heavily inspired by Wordle, created by Josh
          Wardle and now owned by the New York Times. We’re recreating
          it here, as part of an educational project in the “Joy of
          React” course.
        </p>
        <p>
          To learn more about the rules of the game, be sure to visit{' '}
          <a
            href="https://www.nytimes.com/games/wordle/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            the original game
          </a>
        </p>
      </Modal>
    </header>
  );
};

export default Header;

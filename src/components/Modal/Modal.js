import React from 'react';
import { Dialog } from '@reach/dialog';
import { X } from 'react-feather';

import '@reach/dialog/styles.css';

const Modal = ({ title, isOpen, handleDismiss, children }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={handleDismiss}
      aria-label={title}
    >
      <button className="modal-close-btn" onClick={handleDismiss}>
        <span className="visually-hidden">Dismiss dialog</span>
        <X />
      </button>
      <h2 className="modal-title">{title}</h2>
      {children}
    </Dialog>
  );
};

export default Modal;

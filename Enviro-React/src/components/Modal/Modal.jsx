import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children, closeText = "Tutup" }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {title ? (
          <div className="modal-header">
            <button onClick={onClose} className="modal-close-btn">
              &times;
            </button>
          </div>
        ) : (
          <button onClick={onClose} className="modal-close-btn top-right">
            &times;
          </button>
        )}

        <div className="isi">{children}</div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-action-btn">
            {closeText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

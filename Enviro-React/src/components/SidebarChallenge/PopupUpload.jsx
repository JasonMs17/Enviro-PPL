import React, { useRef } from 'react';
import './PopupUpload.css';

const PopupUpload = ({ onClose }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup-upload-wrapper" onClick={handleOverlayClick}>
      <div className="popup-upload">
        <button className="upload-button" onClick={handleUploadClick}>
          Upload Bukti
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupUpload;

import React from "react";
import "./ContentLoading.css";

const ContentLoading = () => {
  return (
    <div className="content-loading-container">
      <div className="content-loading-spinner">
        <div className="spinner"></div>
      </div>
      <p className="content-loading-text">Loading...</p>
    </div>
  );
};

export default ContentLoading;

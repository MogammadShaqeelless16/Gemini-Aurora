import React from "react";
import "./Popup.css";

const Popup = () => {
  return (
    <div className="popup">
      <h2>Gemini Leda</h2>
      <p>Scanning the current webpage...</p>
      <button onClick={() => alert("Opening sidebar...")}>
        View Detailed Report
      </button>
    </div>
  );
};

export default Popup;

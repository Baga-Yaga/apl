import React from "react";
import "./style.css"; // External CSS

function StyleDemo() {

  // Inline CSS
  const inlineStyle = {
    color: "blue",
    fontSize: "22px",
    padding: "10px",
    border: "2px solid black",
    marginBottom: "15px"
  };

  return (
    <div className="container">

      {/* Inline CSS */}
      <h2 style={inlineStyle}>This is Inline CSS</h2>

      {/* Internal CSS */}
      <style>{`
        .internalStyle {
          color: purple;
          background-color: #f3e5f5;
          padding: 10px;
          border: 1px solid purple;
          font-size: 20px;
          margin-bottom: 15px;
        }
      `}</style>

      <p className="internalStyle">This is Internal CSS</p>

      {/* External CSS */}
      <p className="externalStyle">This is External CSS</p>

    </div>
  );
}

export default StyleDemo;

import React from "react";
import "./Cell.css";

const Cell = ({ content, updateData }) => {
  const handleText = (e) => updateData(e.target.value);

  return (
    <div>
      <textarea
        className="cell-edit-mode"
        value={content}
        onChange={handleText}
      />
      <div className="cell-presentation-mode">Presentation mode</div>
    </div>
  );
};

export default Cell;

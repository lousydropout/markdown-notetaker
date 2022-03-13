import React, { useEffect, useState } from "react";
import "./Cell.css";

const Cell = ({ content, updateData }) => {
  const [text, setText] = useState("");

  const handleText = (e) => updateData(e.target.value);

  useEffect(() => {
    // console.log("content: ", content);
    setText(content);
  }, [content]);

  return (
    <div>
      <textarea className="cell-edit-mode" value={text} onChange={handleText} />
      <div className="cell-presentation-mode">Presentation mode</div>
    </div>
  );
};

export default Cell;

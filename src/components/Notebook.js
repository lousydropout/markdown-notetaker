import React, { useEffect, useState } from "react";
import { notebookData } from "../assets/notebook";
import Cell from "./Cell";
import "./Notebook.css";

const Notebook = () => {
  const [notebook, setNotebook] = useState({ data: [] });
  useEffect(() => setNotebook(notebookData), []);

  const updateData = (idx, content) => {
    const data = notebook.data;

    const newData = { ...data[idx], content };
    setNotebook({
      ...notebook,
      data: [
        ...data.slice(0, idx),
        newData,
        ...data.slice(idx + 1, data.length),
      ],
    });
  };

  // console.log("notebook.data: ", notebook.data);

  return (
    <ul className="cell-list">
      {notebook.data.map((cell, idx) => {
        return (
          <Cell
            key={cell.id}
            {...cell}
            updateData={(content) => updateData(idx, content)}
          />
        );
      })}
    </ul>
  );
};

export default Notebook;

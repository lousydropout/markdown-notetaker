import React, { useEffect, useState } from "react";
import { notebookData } from "../assets/notebook";
import Cell from "./Cell";
import Header from "./Header";
import "./Notebook.css";

const Notebook = () => {
  const [notebook, setNotebook] = useState({ title: "New document", data: [] });
  useEffect(() => setNotebook(notebookData), []);

  const updateContent = (idx) => {
    const f = (idx, content) => {
      const data = [...notebook.data]; // make copy of notebook.data
      data[idx].content = content; // update data[idx].content
      setNotebook({ ...notebook, data }); // update notebook.data
    };
    return (content) => f(idx, content);
  };

  const updateTitle = (title) => {
    setNotebook({ ...notebook, title });
  };

  return (
    <>
      <Header title={notebook.title} updateTitle={updateTitle} />
      <ul className="cell-list">
        {notebook.data.map((cell, idx) => {
          return (
            <Cell key={cell.id} {...cell} updateData={updateContent(idx)} />
          );
        })}
      </ul>
    </>
  );
};

export default Notebook;

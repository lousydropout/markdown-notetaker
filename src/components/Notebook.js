import React, { useEffect, useState } from "react";
import { notebookData } from "../assets/notebook";
import Cell from "./Cell";
import Header from "./Header";
import "./Notebook.css";
import { v4 as uuid } from "uuid";

const emptyCell = {
  id: "",
  content_type: "markdown",
  content: "",
};

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

  const addCell = (idx) => {
    const f = () => {
      const data = [...notebook.data];
      data.splice(idx + 1, 0, {
        ...emptyCell,
        id: uuid(),
      });
      setNotebook({ ...notebook, data });
    };
    return f;
  };

  const updateTitle = (title) => {
    setNotebook({ ...notebook, title });
  };

  const notebookCells = notebook.data.map((cell, idx) => {
    return (
      <Cell
        key={cell.id}
        {...cell}
        updateData={updateContent(idx)}
        addCell={addCell(idx)}
      />
    );
  });

  useEffect(() => {}, [notebook]);

  return (
    <>
      <Header title={notebook.title} updateTitle={updateTitle} />
      <ul className="cell-list">{notebookCells}</ul>
    </>
  );
};

export default Notebook;

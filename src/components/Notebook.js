import Cell from "./Cell";
import "./Notebook.css";
import { v4 as uuid } from "uuid";

const emptyCell = {
  id: "",
  content_type: "markdown",
  content: "",
};

const Notebook = ({ notebook, setNotebook }) => {
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

  const deleteCell = (idx) => {
    const f = () => {
      const data = [...notebook.data];
      data.splice(idx, 1);
      setNotebook({ ...notebook, data });
    };
    return f;
  };

  const notebookCells = notebook.data.map((cell, idx) => {
    return (
      <Cell
        key={cell.id}
        {...cell}
        updateData={updateContent(idx)}
        addCell={addCell(idx)}
        deleteCell={deleteCell(idx)}
      />
    );
  });

  return <div className="cell-list">{notebookCells}</div>;
};

export default Notebook;

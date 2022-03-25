import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Notebook from "./components/Notebook";
import { notebookData } from "./assets/notebook";
import { emptyCell } from "./assets/emptyCell";

const newNotebook = {
  title: "New document",
  data: [emptyCell],
};

function App() {
  const [notebook, setNotebook] = useState(newNotebook);
  useEffect(() => setNotebook(notebookData), []);

  const updateTitle = (title) => setNotebook({ ...notebook, title });

  const handleSave = () => {
    console.log("TODO: POST /files with payload ", notebook);
  };

  const handleSwitchFile = () => {
    console.log("TODO: Open modal for user to select file");
  };

  return (
    <div className="App">
      <Header
        title={notebook.title}
        updateTitle={updateTitle}
        handleSave={handleSave}
        handleSwitchFile={handleSwitchFile}
      />
      <Notebook notebook={notebook} setNotebook={setNotebook} />
    </div>
  );
}

export default App;

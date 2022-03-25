import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Notebook from "./components/Notebook";
import { notebookData } from "./assets/notebook";

function App() {
  const [notebook, setNotebook] = useState({ title: "New document", data: [] });
  useEffect(() => setNotebook(notebookData), []);

  const updateTitle = (title) => {
    setNotebook({ ...notebook, title });
  };

  return (
    <div className="App">
      <Header title={notebook.title} updateTitle={updateTitle} />
      <Notebook notebook={notebook} setNotebook={setNotebook} />
    </div>
  );
}

export default App;

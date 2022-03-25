import { useState, useEffect, useRef } from "react";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

import "./Cell.css";

const Cell = ({ id, content, updateData, addCell, deleteCell }) => {
  // hooks
  const [editMode, setEditMode] = useState(false);
  const cellRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (cellRef.current?.contains(event.target)) return;
      setEditMode(false);
    });
  }, []);

  // css id parameters
  const reactMarkdownId = `react-markdown-${id}`;
  const cellEditId = `cell-edit-${id}`;

  // functions
  const handleText = (e) => updateData(e.target.value);
  const toggleEditMode = () => {
    setEditMode((editMode) => !editMode);
    setTimeout(function () {
      document.getElementById(cellEditId).focus();
    }, 0);
  };

  return (
    <div className="cell">
      <textarea
        ref={cellRef}
        style={{ display: editMode ? "block" : "none" }}
        className="cell-edit-mode"
        value={content}
        onChange={handleText}
        id={cellEditId}
        autoFocus
        onFocus={(e) => (e.target.selectionStart = e.target.value.length)}
      />
      <div
        className="reactMarkdown"
        id={reactMarkdownId}
        style={{ display: editMode ? "none" : "block" }}
        onDoubleClick={toggleEditMode}
      >
        <ReactMarkdown
          children={content}
          className="markdown cell-render-mode"
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
      <div className="cell-bottom-bar">
        <span className="delete-cell-button" onClick={deleteCell}>
          <FontAwesomeIcon icon={faMinus} className="add-cell" />
          Delete cell above
        </span>
        <span className="add-cell-button" onClick={addCell}>
          <FontAwesomeIcon icon={faAdd} className="add-cell" />
          Add cell below
        </span>
      </div>
    </div>
  );
};

export default Cell;

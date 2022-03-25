import { useState } from "react";
import { faArrowsRotate, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

import "./Cell.css";

const Cell = ({ id, content, updateData, addCell }) => {
  const handleText = (e) => updateData(e.target.value);
  const [editMode, setEditMode] = useState(false);

  const reactMarkdownId = `react-markdown-${id}`;
  const cellEditId = `cell-edit-${id}`;
  const cellEditBtnId = `cell-edit-btn-${id}`;

  const toggleEditMode = () => {
    setEditMode((editMode) => !editMode);
    setTimeout(function () {
      document.getElementById(cellEditId).focus();
    }, 0);
  };

  return (
    <>
      <div className="cell-bar">
        <button
          className="toggle-edit-mode-btn"
          id={cellEditBtnId}
          onClick={toggleEditMode}
        >
          <a className="edit-mode-toggle-btn" href={`#${cellEditId}`}>
            <FontAwesomeIcon icon={faArrowsRotate} className="toggleIcon" />
            <span className="toggleBtnText">
              {editMode ? "Edit" : "Presentation"} mode
            </span>
          </a>
        </button>
      </div>
      <textarea
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
          className="markdown cell-presentation-mode"
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
        <span className="add-cell-button" onClick={addCell}>
          <FontAwesomeIcon icon={faAdd} className="add-cell" />
          Add cell below
        </span>
      </div>
    </>
  );
};

export default Cell;

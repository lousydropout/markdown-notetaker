import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <span id="title" contentEditable="true">
          Markdown Notetaker
        </span>
        <span className="save-reset-buttons">
          <button>Reset</button>
          <button>Save</button>
        </span>
      </nav>
    </>
  );
};

export default Header;

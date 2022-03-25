import "./Header.css";

const Header = ({ title, updateTitle = () => {} }) => {
  const handleTitle = (event) => {
    updateTitle(event.target.value);
  };
  return (
    <>
      <nav>
        <input id="title" value={title} onChange={handleTitle} />
        <span className="save-reset-buttons">
          {/* <button>Reset</button> */}
          <button>Save</button>
        </span>
      </nav>
    </>
  );
};

export default Header;

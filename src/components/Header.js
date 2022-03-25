import "./Header.css";

const Header = ({ title, updateTitle, handleSave, handleSwitchFile }) => {
  const handleTitle = (event) => {
    updateTitle(event.target.value);
  };
  return (
    <nav>
      <input id="title" value={title} onChange={handleTitle} />
      <span className="save-reset-buttons">
        <button onClick={handleSwitchFile}>Switch file</button>
        <button onClick={handleSave}>Save</button>
      </span>
    </nav>
  );
};

export default Header;

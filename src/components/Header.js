import "./Header.css";
const Header = () => {
  return (
    <nav>
      <span id="title">Markdown Notetaker</span>
      <ul className="nav-links">
        <a href="#">About</a>
      </ul>
    </nav>
  );
};

export default Header;

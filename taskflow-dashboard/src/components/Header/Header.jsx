import "./Header.css";

const Header = ({ completedCount, totalCount }) => {
  return (
    <header className="header">
      <h1 className="header_title">📝 TaskFlow Dashboard</h1>

      <div className="header_counter">
        Completed: {completedCount}/{totalCount}
      </div>
    </header>
  );
};

export default Header;
import "./Header.css";

const Header = ({ completedCount, totalCount }) => {
  const pendingCount = totalCount - completedCount;
  const progress = totalCount
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  return (
    <header className="header">
      <div className="header_top">
        <div className="header_content">
          <p className="header_eyebrow">Task Management</p>
          <h1 className="header_title">TaskFlow Dashboard</h1>
          <p className="header_subtitle">
            Track, complete, and organize your tasks in one place.
          </p>
        </div>

        <div className="header_stats">
          <div className="header_stat">
            <span>Total</span>
            <strong>{totalCount}</strong>
          </div>

          <div className="header_stat header_stat_completed">
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>

          <div className="header_stat header_stat_pending">
            <span>Pending</span>
            <strong>{pendingCount}</strong>
          </div>
        </div>
      </div>

      {totalCount > 0 && (
        <div className="header_progress">
          <div className="header_progress_labels">
            <span>Progress</span>
            <span>{progress}% complete</span>
          </div>

          <div className="header_progress_track">
            <div
              className="header_progress_bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

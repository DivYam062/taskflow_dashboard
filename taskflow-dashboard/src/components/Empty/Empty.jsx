import "./Empty.css";

const Empty = () => {
  return (
    <div className="empty">
      <div className="empty_icon" aria-hidden="true">
        ✓
      </div>

      <h2 className="empty_title">No Tasks Yet</h2>

      <p className="empty_text">
        Your task list is empty. Add your first task above to get started.
      </p>
    </div>
  );
};

export default Empty;

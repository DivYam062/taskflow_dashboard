import "./Empty.css";

const Empty = () => {
  return (
    <div className="empty">
      <h2 className="empty_title">No Tasks Found</h2>

      <p className="empty_text">
        Add your first task to get started.
      </p>
    </div>
  );
};

export default Empty;
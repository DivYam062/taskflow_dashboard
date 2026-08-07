import "./TaskInput.css";

const TaskInput = ({
  value,
  onChange,
  onAdd,
  loading,
}) => {
  return (
    <div className="task_input">
      <input
        className="task_input_field"
        type="text"
        value={value}
        placeholder="Enter a new task..."
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAdd();
          }
        }}
      />

      <button
        className="task_input_button"
        onClick={onAdd}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
};

export default TaskInput;
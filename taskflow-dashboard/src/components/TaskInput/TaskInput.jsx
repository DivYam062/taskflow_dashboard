import "./TaskInput.css";

const TaskInput = () => {
  return (
    <div className="task_input">
      <input
        className="task_input_field"
        type="text"
        placeholder="Enter a new task..."
      />

      <button className="task_input_button">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
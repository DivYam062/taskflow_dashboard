import "./TaskItem.css";

const TaskItem = ({
  task,
  onToggle,
  updatingTaskId,
}) => {
  return (
    <div className="task_item">
      <div className="task_left">
        <input
          className="task_checkbox"
          type="checkbox"
          checked={task.completed}
          disabled={updatingTaskId === task.id}
          onChange={() => onToggle(task.id)}
        />

        <p
          className={`task_title ${
            task.completed ? "task_completed" : ""
          }`}
        >
          {task.title}
        </p>
      </div>

      <button className="task_delete">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
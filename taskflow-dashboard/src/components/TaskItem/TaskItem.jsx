import { useNavigate } from "react-router-dom";
import "./TaskItem.css";

const TaskItem = ({
  task,
  onToggle,
  updatingTaskId,
  onDelete,
  deletingTaskId,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <div className={`task_item ${task.completed ? "task_item_completed" : ""}`}>
      <div className="task_left" onClick={handleNavigate}>
        <input
          className="task_checkbox"
          type="checkbox"
          checked={task.completed}
          disabled={updatingTaskId === task.id}
          onClick={(e) => e.stopPropagation()}
          onChange={() => onToggle(task.id)}
        />

        <div className="task_content">
          <p
            className={`task_title ${
              task.completed ? "task_completed" : ""
            }`}
          >
            {task.title}
          </p>

          <span
            className={`task_status ${
              task.completed ? "task_status_completed" : "task_status_pending"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="task_delete"
        disabled={deletingTaskId === task.id}
        onClick={() => onDelete(task.id)}
      >
        {deletingTaskId === task.id ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default TaskItem;

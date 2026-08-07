import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({
  tasks,
  onToggle,
  updatingTaskId,
  onDelete,
  deletingTaskId,
}) => {
  return (
    <section className="task_list">
      <div className="task_list_header">
        <h2 className="task_list_title">Your Tasks</h2>
        <span className="task_list_count">
          {tasks.length} {tasks.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="task_list_items">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            updatingTaskId={updatingTaskId}
            onDelete={onDelete}
            deletingTaskId={deletingTaskId}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskList;

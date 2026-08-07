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
    <div className="task_list">
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
  );
};

export default TaskList;
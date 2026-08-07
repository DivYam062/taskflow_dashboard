import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task_list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskList;
import "./TaskList.css";

const TaskList = ({ children }) => {
  return (
    <div className="task_list">
      {children}
    </div>
  );
};

export default TaskList;
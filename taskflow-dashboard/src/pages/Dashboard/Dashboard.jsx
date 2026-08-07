import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import TaskInput from "../../components/TaskInput/TaskInput";
import TaskList from "../../components/TaskList/TaskList";

import useTasks from "../../hooks/useTasks";

import "./Dashboard.css";

const Dashboard = () => {
  const {
    tasks,
    loading,
    error,
    retry,
    newTask,
    setNewTask,
    adding,
    addTask,
    toggleTask,
    updatingTaskId,
    deleteTask,
    deletingTaskId,
  } = useTasks();

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <Header completedCount={completedCount} totalCount={tasks.length} />

        <section className="dashboard_section">
          <span className="dashboard_section_label">Add New Task</span>

          <TaskInput
            value={newTask}
            onChange={setNewTask}
            onAdd={addTask}
            loading={adding}
          />
        </section>

        {loading && <Loader />}

        {error && <Error message={error} onRetry={retry} />}

        {!loading && !error && tasks.length === 0 && <Empty />}

        {!loading && !error && tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            updatingTaskId={updatingTaskId}
            onDelete={deleteTask}
            deletingTaskId={deletingTaskId}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

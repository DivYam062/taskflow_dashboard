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
    setSearch,
    searchResult
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

        {tasks.length > 0 && (
          <section className="dashboard_section dashboard_search_section">
            <span className="dashboard_section_label">Search Tasks</span>
            <div className="search_input_wrapper">
              <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input 
                type="text"
                className="search_input_field"
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by task name..."
              />
            </div>
          </section>
        )}

        {loading && <Loader />}

        {error && <Error message={error} onRetry={retry} />}

        {!loading && !error && tasks.length === 0 && <Empty />}

        {!loading && !error && tasks.length > 0 && (
          <TaskList
            tasks={searchResult}
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

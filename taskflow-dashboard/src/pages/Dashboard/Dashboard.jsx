import useTasks from "../../hooks/useTasks";

const Dashboard = () => {
  const { tasks, loading, error } = useTasks();

  return (
    <main>
      <h1>TaskFlow Dashboard</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
    </main>
  );
};

export default Dashboard;
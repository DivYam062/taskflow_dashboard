import useTaskContext from "../context/useTaskContext";

const useTask = (id) => {
  const { loading, error, fetchTasks, getTaskById } = useTaskContext();

  const task = id ? getTaskById(id) : null;
  const notFound = !loading && !error && id && !task;

  return {
    task,
    loading,
    error: notFound ? "Task not found." : error,
    retry: fetchTasks,
  };
};

export default useTask;

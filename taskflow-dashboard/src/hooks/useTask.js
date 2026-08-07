import { useCallback, useEffect, useState } from "react";
import { getTaskByIdApi } from "../api/taskService";

const useTask = (id) => {

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTask = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError("");

      const data = await getTaskByIdApi(id);

      setTask(data);
    } catch (error) {
      console.error("Failed to fetch task:", error);
      setError("Failed to fetch task. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return {
    task,
    loading,
    error,
    retry: fetchTask,
  };
};

export default useTask;
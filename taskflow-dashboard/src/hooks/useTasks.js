import { useEffect, useState } from "react";
import api from "../api/api";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const { data } = await api.get("/todos?_limit=10");

      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    retry: fetchTasks,
    setTasks,
  };
};

export default useTasks;
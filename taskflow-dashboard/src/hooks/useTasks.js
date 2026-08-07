import { useEffect, useState } from "react";
import { createTask, getTasks } from "../api/taskService";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [newTask, setNewTask] = useState("");
  const [adding, setAdding] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTasks();

      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    const title = newTask.trim();

    if (!title) return;

    try {
      setAdding(true);

      const task = await createTask(title);

      setTasks((prevTasks) => [
        {
          ...task,
          id: Date.now(),
        },
        ...prevTasks,
      ]);

      setNewTask("");
    } catch (err) {
      console.error(err);
      alert("Unable to add task.");
    } finally {
      setAdding(false);
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

    newTask,
    setNewTask,

    adding,
    addTask,
  };
};

export default useTasks;
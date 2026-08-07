import { useEffect, useRef, useState } from "react";

import { getTasksApi, TASK_FETCH_LIMIT } from "../api/taskService";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const nextIdRef = useRef(TASK_FETCH_LIMIT + 1);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTasksApi();
      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  };

  const addTask = (title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return null;

    const newTask = {
      id: nextIdRef.current++,
      title: trimmedTitle,
      completed: false,
      userId: 1,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    return newTask;
  };

  const toggleTask = (id) => {
    const taskId = Number(id);

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    const taskId = Number(id);

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  };

  const getTaskById = (id) => {
    const taskId = Number(id);
    return tasks.find((task) => task.id === taskId) ?? null;
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks,
        addTask,
        toggleTask,
        deleteTask,
        getTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

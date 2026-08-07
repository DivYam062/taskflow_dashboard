import { useEffect, useState } from "react";
import { createTaskApi, getTasksApi, updateTaskApi, deleteTaskApi } from "../api/taskService";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [newTask, setNewTask] = useState("");
  const [adding, setAdding] = useState(false);
  const [updatingTaskId, setUpdatingTaskId] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null);

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

  const addTask = async () => {
    const title = newTask.trim();

    if (!title) return;

    try {
      setAdding(true);

      const task = await createTaskApi(title);

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

  const toggleTask = async (id) => {
    const currentTask = tasks.find((task) => task.id === id);
  
    if (!currentTask) return;
  
    try {
      setUpdatingTaskId(id);
  
      await updateTaskApi(id, !currentTask.completed);
  
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? {
                ...task,
                completed: !task.completed,
              }
            : task
        )
      );
    } catch (error) {
      console.error(error);
      alert("Unable to update task.");
    } finally {
      setUpdatingTaskId(null);
    }
  };

  const deleteTask = async (id) => {
    try {
      setDeletingTaskId(id);
  
      await deleteTaskApi(id);
  
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Unable to delete task.");
    } finally {
      setDeletingTaskId(null);
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
    toggleTask,
    updatingTaskId,
    deleteTask,
    deletingTaskId,
  };
};

export default useTasks;
import { useCallback, useEffect, useState } from "react";
import { createTaskApi, getTasksApi, updateTaskApi, deleteTaskApi } from "../api/taskService";
import useTaskContext from "../context/useTaskContext";


const useTasks = () => {
  const { tasks, setTasks } = useTaskContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [newTask, setNewTask] = useState("");
  const [adding, setAdding] = useState(false);

  const [updatingTaskId, setUpdatingTaskId] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null);


  // Fetch all tasks
  const fetchTasks = useCallback(async () => {
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
  }, [setTasks]);


  // Add Task
  const addTask = async () => {
    const title = newTask.trim();

    if (!title) return;

    try {
      setAdding(true);

      const task = await createTaskApi(title);

      const taskWithId = {
        ...task,
        id: Date.now(),
        userId: 1,
        completed: false,
      };


      setTasks((prevTasks) => [
        taskWithId,
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


  // Toggle Task
  const toggleTask = async (id) => {
    const currentTask = tasks.find(
      (task) => task.id === id
    );

    if (!currentTask) return;


    try {
      setUpdatingTaskId(id);

      await updateTaskApi(
        id,
        !currentTask.completed
      );


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


  // Delete Task
  const deleteTask = async (id) => {
    try {
      setDeletingTaskId(id);

      await deleteTaskApi(id);


      setTasks((prevTasks) =>
        prevTasks.filter(
          (task) => task.id !== id
        )
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
  }, [fetchTasks]);


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
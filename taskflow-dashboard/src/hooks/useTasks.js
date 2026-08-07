import { useState } from "react";

import useTaskContext from "../context/useTaskContext";

const useTasks = () => {
  const {
    tasks,
    loading,
    error,
    fetchTasks,
    addTask: addTaskToContext,
    toggleTask: toggleTaskInContext,
    deleteTask: deleteTaskFromContext,
  } = useTaskContext();

  const [newTask, setNewTask] = useState("");
  const [adding, setAdding] = useState(false);
  const [updatingTaskId, setUpdatingTaskId] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null);

  const addTask = () => {
    const title = newTask.trim();
    if (!title) return;

    setAdding(true);

    addTaskToContext(title);
    setNewTask("");

    setAdding(false);
  };

  const toggleTask = (id) => {
    setUpdatingTaskId(id);
    toggleTaskInContext(id);
    setUpdatingTaskId(null);
  };

  const deleteTask = (id) => {
    setDeletingTaskId(id);
    deleteTaskFromContext(id);
    setDeletingTaskId(null);
  };

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

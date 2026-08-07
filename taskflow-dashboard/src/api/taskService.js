import api from "./api";

export const getTasksApi = async () => {
  const { data } = await api.get("/todos?_limit=10");
  return data;
};

export const getTaskByIdApi = async (id) => {
  const { data } = await api.get(`/todos/${id}`);
  return data;
};

export const createTaskApi = async (title) => {
  const { data } = await api.post("/todos", {
    title,
    completed: false,
    userId: 1,
  });

  return data;
};

export const updateTaskApi = async (id, completed) => {
  const { data } = await api.patch(`/todos/${id}`, {
    completed,
  });

  return data;
};

export const deleteTaskApi = async (id) => {
  await api.delete(`/todos/${id}`);
};
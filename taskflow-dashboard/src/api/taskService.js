import api from "./api";

export const getTasks = async () => {
  const { data } = await api.get("/todos?_limit=10");
  return data;
};

export const createTask = async (title) => {
  const { data } = await api.post("/todos", {
    title,
    completed: false,
    userId: 1,
  });

  return data;
};
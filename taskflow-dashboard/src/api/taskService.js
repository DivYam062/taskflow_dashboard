import api from "./api";

export const TASK_FETCH_LIMIT = 10;

export const getTasksApi = async () => {
  const { data } = await api.get(`/todos?_limit=${TASK_FETCH_LIMIT}`);
  return data;
};

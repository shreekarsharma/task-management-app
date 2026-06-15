import axios from "axios";

const API_URL = "https://task-management-app-kqkz.onrender.com/api/todos";

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Get all todos
export const getTodos = async (token) => {
  const response = await axios.get(API_URL, getConfig(token));

  return response.data;
};

// Create todo
export const createTodo = async (todoData, token) => {
  const response = await axios.post(API_URL, todoData, getConfig(token));

  return response.data;
};

// Update todo
export const updateTodo = async (id, todoData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    todoData,
    getConfig(token),
  );

  return response.data;
};

// Delete todo
export const deleteTodo = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token));

  return response.data;
};

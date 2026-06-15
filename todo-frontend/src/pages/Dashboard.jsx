import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

import { useAuth } from "../context/AuthContext";

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todoService";

const Dashboard = () => {
  const { user } = useAuth();

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const data = await getTodos(user.token);

      setTodos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (todoData) => {
    try {
      const newTodo = await createTodo(todoData, user.token);

      setTodos((prev) => [newTodo, ...prev]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleComplete = async (todo) => {
    try {
      const updatedTodo = await updateTodo(
        todo._id,
        {
          completed: !todo.completed,
        },
        user.token,
      );

      setTodos((prev) =>
        prev.map((item) => (item._id === updatedTodo._id ? updatedTodo : item)),
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleEditTodo = async (id, updatedData) => {
    try {
      const updatedTodo = await updateTodo(id, updatedData, user.token);

      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo)),
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id, user.token);

      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {" "}
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <TodoForm onAddTodo={handleAddTodo} />

        <h2 className="text-2xl font-bold mb-4">My Todos</h2>

        {loading ? (
          <p>Loading...</p>
        ) : todos.length === 0 ? (
          <p className="text-gray-600">No todos found.</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
              onEdit={handleEditTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;

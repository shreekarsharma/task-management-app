import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTodo({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg shadow mb-6"
    >
      {" "}
      <h2 className="text-xl font-semibold mb-4">Add New Todo </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;

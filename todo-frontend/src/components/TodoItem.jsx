import { useState } from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(todo.title);

  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    onEdit(todo._id, {
      title,
      description,
    });

    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="w-full border rounded px-3 py-2 mb-3"
          />

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-3 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3
              className={`text-lg font-semibold ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </h3>

            {todo.description && (
              <p className="text-gray-600 mt-1">{todo.description}</p>
            )}

            <span
              className={`inline-block mt-3 px-3 py-1 text-sm rounded-full ${
                todo.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onToggleComplete(todo)}
              className="bg-green-500 text-white px-3 py-2 rounded"
            >
              {todo.completed ? "Undo" : "Done"}
            </button>

            <button
              onClick={() => onDelete(todo._id)}
              className="bg-red-500 text-white px-3 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;

import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all todos of logged-in user
// Create new todo
router.route("/").get(protect, getTodos).post(protect, createTodo);

// Update todo
// Delete todo
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);

export default router;

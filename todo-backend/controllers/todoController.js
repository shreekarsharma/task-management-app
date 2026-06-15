import Todo from "../models/Todo.js";

// @desc    Get all todos of logged-in user
// @route   GET /api/todos
// @access  Private
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc    Create Todo
// @route   POST /api/todos
// @access  Private
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const todo = await Todo.create({
      title,
      description,
      user: req.user._id,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc    Update Todo
// @route   PUT /api/todos/:id
// @access  Private
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    // Authorization check
    if (todo.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    todo.title = req.body.title ?? todo.title;

    todo.description = req.body.description ?? todo.description;

    todo.completed = req.body.completed ?? todo.completed;

    const updatedTodo = await todo.save();

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc    Delete Todo
// @route   DELETE /api/todos/:id
// @access  Private
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    // Authorization check
    if (todo.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    await todo.deleteOne();

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

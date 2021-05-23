const express = require("express");

const router = express.Router();

const uuidv4 = require("uuid").v4;

let todos = [
  {
    id: "haf24jd",
    todo: "do laundry",
    done: "false",
  },
  {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true",
  },
];

router.get("/get-all-todos", function (req, res) {
  res.json({ todos });
});

router.get("/get-todo-by-id/:id", function (req, res) {
  const { id } = req.params;

  let foundTodo = todos.findIndex((item) => {
    return item.id === id;
  });
  if (foundTodo === -1) {
    res.status(404).json({
      message:
        "The Todo ID you are looking for does not exist, plaese check ID",
    });
  } else {
    res.json({
      payload: todos[foundTodo],
    });
  }
});

router.get("/get-todos-by-done/:done", function (req, res) {
  const { done } = req.params;

  let newDoneArray = todos.findIndex((item) => {
    return item.done === done;
  });
  if (newDoneArray === -1) {
    res.json({
      message: "not found",
    });
  } else {
    res.json({
      payload: todos[newDoneArray],
    });
  }
});

router.post("/create-new-todo", function (req, res) {
  const { name } = req.body;

  let newTodoObj = { id: uuidv4(), name, done: "false" };
  todos.push(newTodoObj);
  res.json({
    todos,
  });
});

module.exports = router;

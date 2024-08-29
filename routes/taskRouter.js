const express = require("express"); // import Express framework
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");
// const { get } = require("mongoose");

const router = express.Router(); // Create a new router instance

router.get("/", getAllTask); // Route to get all tasks handled by getAllTask function

router.post("/create", createTask); //route to create a new task handled by create task function

router.patch("/:id", editTask); // route to edit a specific task by its ID, handled by edittask function in controller

router.delete("/:id", deleteTask); //route to delete a specific task by its ID, handled by delete task function from controller

router.get("/:id", eachTask);

module.exports = router; // Export router to be used in the main server file app.js

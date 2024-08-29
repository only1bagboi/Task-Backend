//A Controller in Backend is like a manager that handles the logic for specific parts of your application. It decides what should happen when a request comes in and co-ordinates between the request, your data and response.

const Task = require("../models/task");
const validateID = require("../utils/validateID");

// ====Functions to get all the tasks============
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); //Retrieve all tasks from the database
  res.status(200).json({ tasks }); // send the retrieved tasks
};

// ============Functions for creating a new task==========

const createTask = async (req, res) => {
  const { title, description, tag } = req.body; //destructuring the required fields from the request body

  if (!title) {
    res.status(400).json({ message: "Please provide a title" });
  }
  if (!description) {
    res.status(400).json({ message: "Please provide a description" });
  }
  if (!tag) {
    res.status(400).json({ message: "Please choose a tag" });
  }

  const task = await Task.create(req.body); //Create a new task with the request data
  res.status(201).json({ message: "Task created successfully", task }); //send a status code with a message of success
};

// ========= Function for editing an existing task =============================

const editTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the request parameter

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); //Updates the task with the provided data
  res.status(200).json({ message: "Task updated sucessfully" }); //send the sucess message when updated sucessfully
};

// ============== Fuction to delete an exisiting task =======
const deleteTask = async (req, res) => {
  const { id } = req.params; // get the task ID from the request parameter

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }



  const task = await Task.findOneAndDelete({ _id: id }); //delete the task with the special ID
  res.status(200).json({ message: "Task Sucessfully Deleted" });
};

// Function to get each Task ============
const eachTask = (req, res) => {
  const { id } = req.params; //Get the taskiD from the request parameter

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }


  const task = Task.findOne({ _id: id }); //find the task with the specified Id
  res.status(200).json({ task }); // send the found task in JSON response
};

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; //Export the controller functions to be used in the router.

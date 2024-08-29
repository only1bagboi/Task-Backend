//Utils is the short for utilities which refers to a collection of helper functions or modules designed to perform common tasks on multiple function.

//These  tasks often include things like data validation, formatting, or other repetitive operations that are used across different parts of the application

const mongoose = require("mongoose"); //Import Mongoose

const validateID = (id) => {
    //utility function to validate mongoDB objectIDs
  const isValid = mongoose.Types.ObjectId.isValid(id); //check if the ID is a valid MongoDB objectID
  return isValid; //return the validation report
};

module.exports = validateID; //Export the function to be used in the controller 

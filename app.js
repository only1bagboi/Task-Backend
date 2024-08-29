require("dotenv").config(); // Load environment variable from s .env file into process.env

const express = require("express"); // Import Express framework

const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions

const cors = require("cors");

const app = express(); // Spinning up the Express framework server

const port = 3000; // Define the port number the server

// CORS (Cross-Origin-Resource-Sharing): we use this when the front-end and Back-end are from different origins (domains, ports or protocols) and the back-end hasnt been configured to accept request from the frontend origin
app.use(cors());

const taskRouter = require("./routes/taskRouter"); // Import the taskRouter for task related routes
const notFound = require("./middlewares/notFound"); // Import a middleware to handle not found errors

app.use(express.json()); // This is a Middleware to pass incoming JSON requests from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at api/task, all task-related routes start with /api/task

app.use(notFound); // Use the custom 404 middleware for handling unmatched routes

const start = async () => {
  try {
    // Attempt to connect to mongodb
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");

    // Start the serve and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    // log the error if the database connection fails
    console.log(error);
    console.log(`unable to connect`);
  }
};

start();

// Start the serve and listen on the specified port

// Mongoose is an ODM (Object Data Modelling) library for MongoDB and Node.js.

// MongoDB is a NoAQL database that stores data in a flexible, JSON like format.
// Username: joshuamayberry66
// password: 2W3VO3GPZS3YOyxO

// mongodb+srv://joshuamayberry66:2W3VO3GPZS3YOyxO@cluster0.3ocnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

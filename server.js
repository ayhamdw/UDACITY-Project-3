// Setup empty JS object to act as endpoint for all routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 8785;
projectData = {};

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.get("/all", function (req, res) {
  console.log("Inside All ", projectData);
  res.send(projectData);
});

app.post("/PostData", function (req, res) {
  const data = req.body;
  const response = {
    date: data.date,
    userResponse: data.content,
    temp: data.temp,
  };
  Object.assign(projectData, response);
  console.log("Inside post Data: ", projectData);
  res.send(response);
});

app.listen(PORT, function () {
  console.log(`Server Listen Using PORT ${PORT}`);
});

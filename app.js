const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// create an instance of express
const app = express();

// we use 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("views", path.join(__dirname, "views"));

// the get route for the home page
app.get("/", (req, res) => {
  debugger;
  // render the form and pass in the current student data
  res.render("index");
});

//create route for users to enter numbers
app.post("/calculate", (req, res) => {
  const { num1, num2 } = req.body;
  const sum = Number(num1) + Number(num2);
  const difference = Number(num1) - Number(num2);
  const product = Number(num1) * Number(num2);
  const quotient = Number(num1) / Number(num2);
  res.render("result", { sum, difference, product, quotient });
});

// start server on port 4000
var port = 4000;
app.listen(port, () => {
  console.log(`server is runnning on port ${port}`);
});

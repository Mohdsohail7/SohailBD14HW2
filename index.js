let express = require("express");
let app = express();

// Question 1:
//Given username generate a GitHub profile URL for the user
// functionfun to return a profileUrl
function generateProfileUrl(username) {
  let result = "https://github.com/" + username;
  return result;
}
// Endpoint to return github profile url
app.get('/github-profile', (req, res) => {
  let username = req.query.username;

  res.send(generateProfileUrl(username));
});

// Question 2:
// function to generate course certificate
function generateCertificate(firstName, lastName, courseName) {
  return "This certification is awarded to " + firstName + " " + lastName + " for completing the course " + courseName;
}
// Endpoint to return certificate
app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;

  res.send(generateCertificate(firstName, lastName, courseName));
});

// Question 3:
//Create an endpoint that takes maths, science & english as query parameters and returns grade in percentage
// function to calculate grade
function calculateGrade(maths, science, english) {
  let gradePercentage = ((maths + science + english) / 300 * 100);
  return "Your grade in percentage is " + gradePercentage + "%";
}
// Endpoint to return calculate function
app.get('/grade', (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
res.send(calculateGrade(maths, science, english).toString());
})

// Question 4:
// Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result
// function to calculate bill for each friend
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends;
  return "Result: Each friend owes Rs. " + splitAmount + " against the bill";
}
// Endpoint to return split bill
app.get('/split-bill', (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);

  res.send(splitBill(billAmount, numberOfFriends).toString());
});

//Question 5:
//Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.
// function to calculate monthlySalary
function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = totalHours * hourlyWage;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}
// Endpoint to return monthlySalary
app.get('/monthly-salary', (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);

  res.send(calculateSalary(totalHours, hourlyWage).toString());
});

// port number
let port = 8000;
// server start
app.listen(port, () => {
  console.log("server is running on the port number is: " + port) ;
})
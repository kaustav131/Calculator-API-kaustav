// Add the Calculator APIs

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/main.html"));
});

//your code here

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.send({ status: "error", message: "numbers not found" });
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.send({ status: "error", message: "Invalid data types" });
  }
  const result = num1 + num2;
  if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
    return res.send({ status: "error", message: "Overflow" });
  }
  if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
    return res.send({ status: "error", message: "Underflow" });
  }

  res.send({
    status: "success",
    message: "the sum of given two numbers",
    sum: result,
  });
});

app.post("/sub", (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.send({ status: "error", message: "numbers not found" });
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.send({ status: "error", message: "Invalid data types" });
  }
  const result = num1 - num2;

  if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
    return res.send({ status: "error", message: "Overflow" });
  }
  if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
    return res.send({ status: "error", message: "Underflow" });
  }

  res.send({
    status: "success",
    message: "the difference of given two numbers",
    difference: result,
  });
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.send({ status: "error", message: "numbers not found" });
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.send({ status: "error", message: "Invalid data types" });
  }
  const result = num1 * num2;

  if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
    return res.send({ status: "error", message: "Overflow" });
  }
  if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
    return res.send({ status: "error", message: "Underflow" });
  }

  res.send({
    status: "success",
    message: "The product of given numbers",
    result: result,
  });
});

app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.send({ status: "error", message: "numbers not found" });
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.send({ status: "error", message: "Invalid data types" });
  }
  if (num2 == 0) {
    return res.send({ status: "error", message: "Cannot divide by zero" });
  }
  const result = num1 / num2;

  if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
    return res.send({ status: "error", message: "Overflow" });
  }
  if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
    return res.send({ status: "error", message: "Underflow" });
  }

  res.send({
    status: "success",
    message: "The division of given numbers",
    result: result,
  });
});

module.exports = app;

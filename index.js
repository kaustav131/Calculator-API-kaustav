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
  if (!num2 || !num1) {
    return res.send({ status: "error", message: "numbers not found" });
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.send({ status: "error", message: "Invalid data types" });
  }
  if (Math.abs(num1) > 1000000 || Math.abs(num2) > 1000000) {
    return res.send({ status: "error", message: "Overflow" });
  }
  const result = num1 + num2;
  if (Math.abs(result) > 1000000) {
    return res.send({ status: "error", message: "Overflow" });
  } else if (Math.abs(result) < -1000000) {
    return res.send({ status: "error", message: "Undeflow" });
  }
  res.send({
    status: "success",
    message: "the sum of given two numbers",
    sum: result,
  });
});

module.exports = app;

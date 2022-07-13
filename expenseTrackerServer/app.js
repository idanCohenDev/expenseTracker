const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/expenseTracker/expensesDB");

const expenseSchema = new mongoose.Schema({
  amount: String,
  category: Object,
  date: Date,
  description: String,
  type: String,
  id: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

app.get("/expenses", (req, res) => {
  console.log("Hello World");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

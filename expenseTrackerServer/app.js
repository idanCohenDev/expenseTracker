const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/expensesDB");

const expenseSchema = new mongoose.Schema({
  amount: String,
  category: Object,
  date: Date,
  description: String,
  type: String,
  id: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  expenses: [expenseSchema],
  monthlyGoal: Number,
});

const User = mongoose.model("User", userSchema);

app.get("/expenses", (req, res) => {
  Expense.find({}, (err, expenses) => {
    if (err) {
      console.log(err);
    } else {
      res.send(expenses);
    }
  });
});

app.delete(`/expenses/:id`, (req, res) => {
  const id = req.params.id;
  Expense.findOneAndDelete({ id: id }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(`Deleted expense with id: ${id}`);
    }
  });
});

app.post("/add-expense", (req, res) => {
  const expense = req.body;
  Expense.create(expense, (err, expense) => {
    if (err) {
      console.log(err);
    } else {
      res.send(expense);
    }
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

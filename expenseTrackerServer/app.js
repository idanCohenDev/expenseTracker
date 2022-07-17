const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;

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

app.listen(port, () => {
  console.log("Server is running on port 4000");
});

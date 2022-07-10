const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/expenseTracker");
const expenseSchema = new mongoose.Schema({
  id: String,
  amount: String,
  type: String,
  category: Object,
  description: String,
  date: Object,
  month: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

app.get("/expenses", (req, res) => {
  Expense.find({}, (err, expenses) => {
    if (err) {
      res.send(err);
    } else {
      res.json(expenses);
    }
  });
});
app.post("/delete-expense", (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  Expense.findByIdAndDelete(id, (err, expense) => {
    if (err) {
      res.send(err);
    } else {
      res.send(expense);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

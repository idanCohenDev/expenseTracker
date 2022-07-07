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

app.post("/expenses", (req, res) => {
  const newExpense = new Expense(req.body);
  newExpense.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Expense saved successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

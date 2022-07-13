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

// const expenses = [
//   {
//     amount: "100",
//     category: {
//       name: "Food",
//       color: "#FFA500",
//       iconName: "fast-food",
//     },
//     date: new Date(),
//     description: "Lunch at McDonalds",
//     type: "EXPENSE",
//     id: "1",
//   },
//   {
//     amount: "50",
//     category: {
//       name: "Food",
//       color: "#FFA500",
//       iconName: "fast-food",
//     },
//     date: new Date(),
//     description: "Lunch at McDonalds",
//     type: "EXPENSE",
//     id: "2",
//   },
//   {
//     amount: "50",
//     category: {
//       name: "Food",

//       color: "#FFA500",
//       iconName: "fast-food",
//     },
//     date: new Date(),
//     description: "Lunch at McDonalds",
//     type: "EXPENSE",
//     id: "3",
//   },
// ];

// app.get("/", (req, res) => {
//   Expense.insertMany(expenses, (err, docs) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(docs);
//     }
//   });
// });

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
      console.log(expense);
    }
  });
});

app.delete("/delete-expense", (req, res) => {
  console.log(req.body);
  const id = "62ceead277b565002a2972bd";
  Expense.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(`Deleted expense with id: ${id}`);
    }
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

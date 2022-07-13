import { createContext, useState } from "react";

export const ExpensesContext = createContext({
  category: "",
  getAllExpenses: () => {},
  addExpense: (expense) => {},
  deleteExpense: (id) => {},
  chooseCategory: (category) => {},
});

const ExpensesContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  const getAllExpenses = async () => {
    try {
      const response = await fetch("http://192.168.1.144:4000/expenses");
      const data = await response.json();
      const parsedData = data.map((expense) => {
        return {
          ...expense,
          date: new Date(expense.date),
          amount: parseFloat(expense.amount),
        };
      });
      setExpenses(parsedData);
      return parsedData;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.144:4000/expenses/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      const parsedData = data.map((expense) => {
        return {
          ...expense,
          date: new Date(expense.date),
          amount: parseFloat(expense.amount),
        };
      });
      setExpenses(parsedData);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addExpense = async (expense) => {
    try {
      const response = await fetch("http://192.168.1.144:4000/add-expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      });
      const data = await response.json();
      const parsedData = data.map((expense) => {
        return {
          ...expense,
          date: new Date(expense.date),
          amount: parseFloat(expense.amount),
        };
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const chooseCategory = (category) => {
    setCategory(category);
  };

  const value = {
    getAllExpenses: getAllExpenses,
    deleteExpense: deleteExpense,
    addExpense: addExpense,
    category: category,
    chooseCategory: chooseCategory,
  };
  return (
    <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

import { createContext, useState, useEffect } from "react";

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

  useEffect(() => {
    const getAllExpensesServer = async () => {
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
    getAllExpensesServer();
  }, []);

  const deleteExpenseServer = async (id) => {
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

  const addExpenseServer = async (expense) => {
    try {
      const response = await fetch("http://192.168.1.144:4000/add-expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addExpense = (expense) => {
    addExpenseServer(expense);
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    deleteExpenseServer(id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const chooseCategory = (category) => {
    setCategory(category);
  };

  const value = {
    expenses: expenses,
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

import { createContext, useReducer, useState } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  category: "",
  addExpense: ({ description, amount, date, type, category, id }) => {},
  deleteExpense: (id) => {},
  chooseCategory: (category) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);
  const [category, setCategory] = useState("");

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const chooseCategory = (category) => {
    setCategory(category);
  };
  const value = {
    expenses: expensesState,
    category: category,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    chooseCategory: chooseCategory,
  };
  return (
    <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

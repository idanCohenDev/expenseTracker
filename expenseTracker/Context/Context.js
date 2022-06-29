import { createContext, useReducer, useState } from "react";

const DATA = [
  {
    id: 1,
    description: "Went eating with friendsfdsa fdsf sadfsad sadj gsdgjksa  dsjklfhasd",
    amount: 30,
    date: "14/03/2022",
    month: "March",
    type: "EXPENSE",
    category: { name: "Housing", iconName: "home", color: "#FFBD37" },
  },
];
export const ExpensesContext = createContext({
  expenses: DATA,
  category: "",
  addExpense: ({ description, amount, date, month, type, category, id }) => {},
  deleteExpense: (id) => {},
  chooseCategory: (category) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "DELETE":
      console.log(action.payload);
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DATA);
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

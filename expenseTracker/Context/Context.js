import { createContext, useReducer } from "react";

const DATA = [
  {
    description: "Went eating with friendsdfasfdsfsdfas",
    amount: 30,
    date: "14/03/2022",
    type: "EXPENSE",
    category: { name: "Housing", iconName: "home", color: "#FFBD37" },
  },
];
export const ExpensesContext = createContext({
  expenses: DATA,
  addExpense: ({ description, amount, date, type, category }) => {},
  setExpenses: ({ expenses }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { amount, date, description, type }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedExpense = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedExpense;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DATA);
  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

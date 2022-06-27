import { createContext, useReducer } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    amount: 50,
    date: "10.06.2022",
    description: "A book",
    type: "EXPENSE",
  },
  {
    id: 2,
    amount: 100,
    date: "11.6.2022",
    description: "Allowance",
    type: "INCOME",
  },
  {
    id: 3,
    amount: 150,
    date: "5.6.2022",
    description: "Cable",
    type: "EXPENSE",
  },
  {
    id: 4,
    amount: 7000,
    date: "10.6.2022",
    description: "Salary",
    type: "INCOME",
  },
];

export const ExpensesContext = createContext({
  expenses: DUMMY_DATA,
  addExpense: ({ description, amount, date }) => {},
  setExpenses: ({ expenses }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { amount, date, description, type }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_DATA);
  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
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
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

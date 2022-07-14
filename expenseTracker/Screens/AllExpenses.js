import { useEffect, useState } from "react";
import ExpensesOutput from "../Components/General/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../Context/context";
import { useContext } from "react";
export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    setExpenses(expensesCtx.expenses);
  }, [expensesCtx.expenses]);

  const shownExpenses = expenses.filter((expense) => {
    return expensesCtx.category
      ? expense.category.name === expensesCtx.category
      : expense;
  });

  return <ExpensesOutput type="all" data={shownExpenses} />;
}

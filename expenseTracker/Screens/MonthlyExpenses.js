import { useState, useEffect } from "react";
import ExpensesOutput from "../Components/General/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../Context/context";

export default function MonthlyExpenses({ route }) {
  const currentMonth = new Date().toLocaleString("en", { month: "long" });
  const currentYear = new Date().toLocaleString("en", { year: "numeric" });
  const [userSelection, setUserSelection] = useState({
    month: currentMonth,
    year: currentYear,
  });
  const expensesCtx = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    setExpenses(expensesCtx.expenses);
  }, [expensesCtx.expenses]);

  const shownExpenses = expenses.filter((expense) => {
    if (
      expense.date.toLocaleString("en", { month: "long" }) === userSelection.month &&
      expense.date.toLocaleString("en", { year: "numeric" }) ===
        userSelection.year.toString()
    ) {
      if (expensesCtx.category) {
        if (expense.category.name === expensesCtx.category) {
          return expense;
        }
      } else {
        return expense;
      }
    }
  });

  return (
    <ExpensesOutput
      data={shownExpenses}
      page="month"
      route={route}
      setSelectedMonth={(month) => setUserSelection({ ...userSelection, month })}
      setSelectedYear={(year) => setUserSelection({ ...userSelection, year })}
    />
  );
}

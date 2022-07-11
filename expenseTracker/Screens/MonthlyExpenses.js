import { useState, useEffect } from "react";
import ExpensesOutput from "../Components/General/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../Context/Context";
import { useIsFocused } from "@react-navigation/native";

export default function MonthlyExpenses({ route }) {
  const currentMonth = new Date().toLocaleString("en", { month: "long" });
  const currentYear = new Date().toLocaleString("en", { year: "numeric" });
  const [userSelection, setUserSelection] = useState({
    month: currentMonth,
    year: currentYear,
  });
  const expensesCtx = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState(expensesCtx.expenses);
  const isFocused = useIsFocused();
  useEffect(() => {
    setExpenses(expensesCtx.expenses);
  }, [isFocused, expensesCtx.expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    if (
      expense.date.toLocaleString("en", { month: "long" }) === userSelection.month &&
      expense.date.toLocaleString("en", { year: "numeric" }) === userSelection.year
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
      data={filteredExpenses}
      page="month"
      route={route}
      setSelectedMonth={(month) => setUserSelection({ ...userSelection, month })}
      setSelectedYear={(year) => setUserSelection({ ...userSelection, year })}
    />
  );
}

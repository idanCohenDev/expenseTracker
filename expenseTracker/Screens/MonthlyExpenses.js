import { useState, useEffect } from "react";
import ExpensesOutput from "../Components/UI/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../Context/Context";
import { useIsFocused } from "@react-navigation/native";
import MonthSelector from "../Components/UI/MonthSelector";

export default function MonthlyExpenses({ route }) {
  const currentMonth = new Date().toLocaleString("en", { month: "long" });
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const expensesCtx = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState(expensesCtx.expenses);
  const isFocused = useIsFocused();
  useEffect(() => {
    setExpenses(expensesCtx.expenses);
  }, [isFocused, expensesCtx.expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    return expensesCtx.category
      ? expense.category.name === expensesCtx.category &&
          expense.month === selectedMonth
      : expense.month === selectedMonth;
  });

  return (
    <>
      <MonthSelector
        setSelectedMonth={(month) => {
          route.params.setSelectedMonth(month);
          setSelectedMonth(month);
        }}
      />
      <ExpensesOutput data={filteredExpenses} />
    </>
  );
}


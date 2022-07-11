import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../Components/General/ExpensesOutput";
import { ExpensesContext } from "../Context/Context";
import { useIsFocused } from "@react-navigation/native";

export default function AllExpenses({ route }) {
  const expensesCtx = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState(expensesCtx.expenses);
  const isFocused = useIsFocused();
  useEffect(() => {
    setExpenses(expensesCtx.expenses);
  }, [isFocused, expensesCtx.expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    return expensesCtx.category
      ? expense.category.name === expensesCtx.category
      : expense;
  });

  return <ExpensesOutput type="all" data={filteredExpenses} />;
}

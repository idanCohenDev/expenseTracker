import { useEffect, useState } from "react";
import ExpensesOutput from "../Components/General/ExpensesOutput";
import { ExpensesContext } from "../Context/Context";
import { useContext } from "react";
export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const getExpenses = async () => {
      const allExpenses = await expensesCtx.getAllExpenses();
      setExpenses(allExpenses);
    };
    getExpenses();
  }, [expensesCtx]);

  const filteredExpenses = expenses.filter((expense) => {
    return expensesCtx.category
      ? expense.category.name === expensesCtx.category
      : expense;
  });

  return <ExpensesOutput type="all" data={filteredExpenses} />;
}

import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../Components/UI/ExpensesOutput";
import { ExpensesContext } from "../Context/Context";
import { useIsFocused } from "@react-navigation/native";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState(expensesCtx.expenses);
  const isFocused = useIsFocused();
  useEffect(() => {
    setExpenses(expensesCtx.expenses);
  }, [isFocused]);

  return <ExpensesOutput data={expenses} />;
}

const styles = StyleSheet.create({});

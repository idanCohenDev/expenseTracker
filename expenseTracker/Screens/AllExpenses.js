import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import ExpensesOutput from "../Components/UI/ExpensesOutput";
import { ExpensesContext } from "../Context/Context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return <ExpensesOutput data={expensesCtx.expenses} />;
}

const styles = StyleSheet.create({});

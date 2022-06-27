import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/Colors";
import BalanceInformation from "./BalanceInformation";

export default function TotalBalance({ data }) {
  const balance = data.reduce((sum, expense) => {
    if (expense.type === "EXPENSE") {
      return sum - expense.amount;
    } else {
      return sum + expense.amount;
    }
  }, 0);

  const income = data.reduce((sum, expense) => {

    if (expense.type !== "EXPENSE") {
      return (sum += expense.amount);
    } else {
      return (sum += 0);
    }
  }, 0);

  const expenses = data.reduce((sum, expense) => {

    if (expense.type === "EXPENSE") {
      return (sum += expense.amount);
    } else {
      return (sum += 0);
    }
  }, 0);

  const dynamicColor = {
    color: balance > 0 ? Colors.Green : Colors.Red,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Balance: </Text>
      <Text style={[styles.balance, dynamicColor]}>{balance}$</Text>
      <View style={styles.infoContainer}>
        <BalanceInformation type={"income"} data={income} />
        <BalanceInformation type={"expense"} data={expenses} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    borderRadius: 24,
    marginBottom: 24,
    backgroundColor: Colors.Black,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  balance: {
    color: "#fff",
    fontSize: 48,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 24,
  },
});

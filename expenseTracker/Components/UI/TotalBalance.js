import { useEffect, useState } from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { Colors } from "../../styles/Colors";
import BalanceInformation from "./BalanceInformation";
import LinearGradientBackground from "./LinearGradientBackground";

const { width, height } = Dimensions.get("screen");

export default function TotalBalance({ data }) {
  const [balanceColor, setBalanceColor] = useState("#fff");
  useEffect(() => {
    if (balance > 0) {
      setBalanceColor(Colors.Green);
    } else if (balance < 0) {
      setBalanceColor(Colors.Red);
    } else {
      setBalanceColor("#fff");
    }
  }, [data]);

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
    color: balanceColor,
  };

  return (
    <LinearGradientBackground style={styles.container}>
      <Text style={styles.title}>Total Balance</Text>
      <Text style={[styles.balance, dynamicColor]}>
        {balance < 0 ? "-" : ""}${Math.abs(balance)}
      </Text>
      <View style={styles.infoContainer}>
        <BalanceInformation type={"income"} data={income} />
        <BalanceInformation type={"expense"} data={expenses} />
      </View>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 8,
    letterSpacing: 0.8,
  },
  balance: {
    color: "#fff",
    fontSize: 56,
    fontWeight: "700",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 32,
  },
});

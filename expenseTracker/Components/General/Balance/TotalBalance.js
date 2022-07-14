import { StyleSheet, Dimensions, Text, View } from "react-native";
import BalanceInformation from "./BalanceInformation";
import LinearGradientBackground from "../Layouts/LinearGradientBackground";
import ShadowContainer from "../Layouts/ShadowContainer";

const { width, height } = Dimensions.get("screen");

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

  return (
    <ShadowContainer>
      <LinearGradientBackground style={styles.container}>
        <Text style={styles.title}>Total Balance</Text>
        <Text style={styles.balance}>
          {balance < 0 ? "-" : ""}${Math.abs(balance)}
        </Text>
        <View style={styles.infoContainer}>
          <BalanceInformation type={"income"} data={income} />
          <BalanceInformation type={"expense"} data={expenses} />
        </View>
      </LinearGradientBackground>
    </ShadowContainer>
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

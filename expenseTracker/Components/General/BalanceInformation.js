import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/Colors";
import Icon from "./Icon";

export default function BalanceInformation({ type, data }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name={type === "income" ? "arrow-up" : "arrow-down"}
          size={32}
          color={type === "income" ? Colors.Green : Colors.Red}
        />
      </View>
      <View>
        <Text style={styles.type}>{type === "income" ? "Income" : "Expenses"}</Text>
        <Text style={styles.amount}>${data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "rgba(127, 132, 135, 0.4)",
    borderRadius: "50%",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  type: {
    color: "#fff",
    fontSize: 16,
  },
  amount: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

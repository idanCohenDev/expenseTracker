import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/Colors";
import Icon from "./Icon";

export default function Expense({ data }) {
  const dynamicColor = {
    color: data.type === "EXPENSE" ? Colors.Red : Colors.Green,
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={[styles.amount, dynamicColor]}>
          {data.type === "EXPENSE" ? "-" : "+"}
          {data.amount}$
        </Text>
        <Text style={styles.date}>{data.date}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View
          style={[styles.iconContainer, { backgroundColor: data.category.color }]}
        >
          <Icon name={data.category.iconName} size={32} color="#fff" />
        </View>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 24,
    marginVertical: 12,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    shadowColor: Colors.Grey,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    marginHorizontal: 4,
    shadowRadius: 4,
  },
  infoContainer: {
    alignItems: "center",
  },
  amount: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    color: Colors.Grey,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
    width: "60%",
  },

  description: {
    fontWeight: "bold",
    color: Colors.Black,
    textAlign: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
});

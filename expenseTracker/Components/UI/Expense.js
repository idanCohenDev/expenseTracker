import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../styles/Colors";
import Icon from "./Icon";
import Swipeable from "react-native-swipeable";
import { ExpensesContext } from "../../Context/Context";

const { width, height } = Dimensions.get("screen");

export default function Expense({ data }) {
  const expensesCtx = useContext(ExpensesContext);
  const dynamicColor = {
    color: data.type === "EXPENSE" ? Colors.Red : Colors.Green,
  };

  return (
    <Swipeable
      rightActionActivationDistance={250}
      rightContent={
        <View>
          <Text>X</Text>
        </View>
      }
      onRightActionActivate={() => {
        expensesCtx.deleteExpense(data.id);
      }}
    >
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={[styles.amount, dynamicColor]}>
            {data.type === "EXPENSE" ? "-" : "+"}${data.amount}
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
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 8,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    shadowColor: Colors.Grey,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    marginHorizontal: 4,
    shadowRadius: 4,
    width: width * 0.9,
  },
  infoContainer: {
    alignItems: "flex-end",
    width: "30%",
  },
  amount: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    color: Colors.Grey,
    fontWeight: "100",
    fontSize: 14,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
  },
  description: {
    flexShrink: 1,
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

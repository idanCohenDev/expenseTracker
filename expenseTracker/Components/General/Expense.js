import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../styles/Colors";
import Icon from "./Icon";
import Swipeable from "react-native-swipeable";
import { ExpensesContext } from "../../Context/Context";
import ShadowContainer from "./ShadowContainer";

const { width, height } = Dimensions.get("screen");

export default function Expense({ data }) {
  const formattedDate = `${data.date.getDate()}/${
    data.date.getMonth() + 1
  }/${data.date.getFullYear()}`;
  const expensesCtx = useContext(ExpensesContext);
  const dynamicColor = {
    color: data.type === "EXPENSE" ? Colors.Red : Colors.Green,
  };

  const renderDateOutput = () => {
    const { date } = data;
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else if (date.getDate() - date.getDate() < 7) {
      return date.toLocaleDateString("en", { weekday: "long" });
    } else {
      return formattedDate;
    }
  };

  return (
    <Swipeable
      rightActionActivationDistance={250}
      rightContent={
        <View style={styles.deleteContainer}>
          <Icon name="trash" size={32} color="#fff" />
        </View>
      }
      onRightActionActivate={() => {
        expensesCtx.deleteExpense(data.id);
      }}
    >
      <ShadowContainer>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={[styles.amount, dynamicColor]}>
              {data.type === "EXPENSE" ? "-" : "+"}${data.amount}
            </Text>
            <Text style={styles.date}>{renderDateOutput()}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: data.category.color },
              ]}
            >
              <Icon name={data.category.iconName} size={32} color="#fff" />
            </View>
            <Text style={styles.description}>{data.description}</Text>
          </View>
        </View>
      </ShadowContainer>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  deleteContainer: {
    backgroundColor: Colors.Red,
    height: 80,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  container: {
    borderRadius: 24,
    marginBottom: 8,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    width: width * 0.9,
    height: 80,
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

import { FlatList, View, StyleSheet, Dimensions, Text } from "react-native";
import Expense from "./Expense";
import TotalBalance from "./TotalBalance";
import { Colors } from "../../styles/Colors";
import MonthSelector from "../MonthPage/MonthSelector";
import TypeButton from "./TypeButton";
import { useState } from "react";
const { width, height } = Dimensions.get("screen");

export default function ExpensesOutput({ data, page, route, setSelectedMonth }) {
  const [type, setType] = useState("");
  const finalData = data.filter((item) => (type ? item.type === type : item));
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TotalBalance data={data} />
        <View style={styles.titleContainer}>
          {page === "month" && (
            <MonthSelector
              setSelectedMonth={(month) => {
                route.params.setSelectedMonth(month);
                setSelectedMonth(month);
              }}
            />
          )}

          <View style={styles.typeContainer}>
            <TypeButton
              containerStyle={styles.typeButtonContainer}
              textStyle={styles.typeButtonText}
              isPressed={type === "" ? true : false}
              setType={(type) => setType("")}
            >
              All
            </TypeButton>
            <TypeButton
              containerStyle={styles.typeButtonContainer}
              textStyle={styles.typeButtonText}
              type="EXPENSE"
              isPressed={type === "EXPENSE" ? true : false}
              setType={(type) => setType(type)}
            >
              Expense
            </TypeButton>
            <TypeButton
              containerStyle={styles.typeButtonContainer}
              textStyle={styles.typeButtonText}
              type="INCOME"
              isPressed={type === "INCOME" ? true : false}
              setType={(type) => setType(type)}
            >
              Income
            </TypeButton>
          </View>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ marginLeft: width * 0.05 }}
        data={finalData}
        renderItem={({ item }) => {
          return <Expense data={item} />;
        }}
        keyExtractor={(item) => item.description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    height: height,
    paddingBottom: height * 0.2,
  },
  innerContainer: {
    alignItems: "center",
  },
  titleContainer: {
    width: width * 0.9,
    alignItems: "center",
    paddingVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  typeContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 8,
    borderRadius: 16,
    padding: 4,
  },
  typeButtonContainer: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    width: (width * 0.9) / 3,
  },
  typeButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});

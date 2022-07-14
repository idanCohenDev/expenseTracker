import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import Expense from "./Expense";
import TotalBalance from "../Balance/TotalBalance";
import DateSelector from "../../MonthPage/DateSelector";
import TypeButton from "../General/TypeButton";
import { useState } from "react";
const { width, height } = Dimensions.get("screen");

export default function ExpensesOutput({
  page,
  setSelectedYear,
  setSelectedMonth,
  data,
  route,
}) {
  const [type, setType] = useState("");
  const finalData = data.filter((item) => (type ? item.type === type : item));
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TotalBalance data={data} />
        <View style={styles.titleContainer}>
          {page === "month" && (
            <View style={styles.dateSelectionContainer}>
              <DateSelector
                setSelectedMonth={(month) => {
                  route.params.setSelectedMonth(month);
                  setSelectedMonth(month);
                }}
                type="month"
              />
              <DateSelector
                setSelectedYear={(year) => {
                  route.params.setSelectedYear(year);
                  setSelectedYear(year);
                }}
                type="year"
              />
            </View>
          )}

          <View style={[styles.typeContainer, { zIndex: -1 }]}>
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
        style={{ zIndex: -1 }}
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
    height: height,
    paddingBottom: height * 0.2,
  },
  innerContainer: {
    alignItems: "center",
  },
  dateSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    width: width * 0.9,
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

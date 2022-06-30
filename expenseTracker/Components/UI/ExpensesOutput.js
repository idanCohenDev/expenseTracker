import { FlatList, View, StyleSheet, Dimensions, Text } from "react-native";
import Expense from "./Expense";
import TotalBalance from "./TotalBalance";
import { Colors } from "../../styles/Colors";
import MonthSelector from "./MonthSelector";
const { width, height } = Dimensions.get("screen");

export default function ExpensesOutput({ data, type, route, setSelectedMonth }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TotalBalance data={data} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Transactions</Text>
          {type === "month" && (
            <MonthSelector
              setSelectedMonth={(month) => {
                route.params.setSelectedMonth(month);
                setSelectedMonth(month);
              }}
            />
          )}
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ marginLeft: width * 0.05 }}
        data={data}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 16,
  },
});

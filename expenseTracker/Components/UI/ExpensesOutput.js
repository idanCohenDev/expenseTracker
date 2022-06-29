import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import Expense from "./Expense";
import TotalBalance from "./TotalBalance";
import { Colors } from "../../styles/Colors";
const { width, height } = Dimensions.get("screen");

export default function ExpensesOutput({ data }) {
  return (
    <View style={styles.container}>
      <TotalBalance data={data} />
      <FlatList
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
    height: height ,
  },
});

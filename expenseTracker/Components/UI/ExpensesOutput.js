import { useRef } from "react";
import { FlatList, Animated } from "react-native";
import Container from "./Container";
import Expense from "./Expense";
import TotalBalance from "./TotalBalance";

export default function ExpensesOutput({ data }) {
  return (
    <Container>
      <TotalBalance data={data} />
      <FlatList
        data={data}
        renderItem={({ item}) => {
          return <Expense data={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

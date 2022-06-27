import { StyleSheet, TextInput, Text, View, Button, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import Container from "../Components/UI/Container";
import { Colors } from "../styles/Colors";
import CategoryDropdown from "../Components/UI/CategoryDropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ExpensesContext } from "../Context/Context";

const { width, height } = Dimensions.get("window");

export default function NewExpense({ navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const [amount, setAmount] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateText, setDateText] = useState("");
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  return (
    <Container style={{ alignItems: "center" }}>
      <Text style={styles.title}>Add Expenses</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="decimal-pad"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button title="Income" onPress={() => setType("INCOME")} />
        <Button title="Expense" onPress={() => setType("EXPENSE")} />
      </View>
      <View style={styles.categoryContainer}>
        {type === "EXPENSE" && (
          <Button
            onPress={() => setCategoryOpen((prevCategoryOpen) => !prevCategoryOpen)}
            title="Category"
          />
        )}
        {categoryOpen && <CategoryDropdown />}
      </View>
      <TextInput
        style={styles.noteInput}
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      <Button
        title="Pick Date"
        onPress={() => setDateModalOpen((prevDateModalOpen) => !prevDateModalOpen)}
      />
      {dateModalOpen && (
        <DateTimePicker
          value={date}
          style={styles.datePicker}
          onChange={(e, selectedDate) => {
            const formattedDate = `${selectedDate.getDate()}/${
              selectedDate.getMonth() + 1
            }/${selectedDate.getFullYear()}`;
            setDateText(formattedDate);
            setDate(date);
          }}
        />
      )}
      <Button
        title="Save"
        onPress={() => {
          console.log(expensesCtx.expenses);
          expensesCtx.addExpense({
            description: note,
            amount: Number(amount),
            date: dateText,
            type: type,
            category: "Hello ",
          });
          setNote("");
          setAmount("");
          setCategoryOpen(false);
          setDate(new Date());
          setDateModalOpen(false);
          setDateText("");
          setType("");
          navigation.navigate("AllExpenses");
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.Black,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: "30%",
    marginBottom: 24,
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: "90%",
    height: 80,
    borderRadius: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  categoryContainer: {
    zIndex: 10,
    borderColor: "#333", 
    borderWidth: 2, 
    width: "100%"
  },
  input: {
    fontSize: 48,
  },
  noteInput: {
    borderBottomColor: "#333",
    borderBottomWidth: 2,
    width: 100,
  },
  datePicker: {
    width: 100,
  },
});

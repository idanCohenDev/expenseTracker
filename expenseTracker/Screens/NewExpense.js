import { StyleSheet, TextInput, Text, View } from "react-native";
import React, { useState } from "react";
import Container from "../Components/UI/Container";
import { Colors } from "../styles/Colors";

export default function NewExpense() {
  const [amount, setAmount] = useState("");
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
  input: {
    fontSize: 48,
  },
});

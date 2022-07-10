import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
  Dimensions,
  Pressable,
  Alert,
} from "react-native";
import Client from "../Context/http";
import React, { useContext, useState, useRef } from "react";
import { Colors } from "../styles/Colors";
import CategoryDropdown from "../Components/General/CategoryDropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ExpensesContext } from "../Context/Context";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import TypeButton from "../Components/General/TypeButton";
import Button from "../Components/General/Button";
import LinearGradientBackground from "../Components/General/LinearGradientBackground";
import ShadowContainer from "../Components/General/ShadowContainer";
import KeyboardDismissOverlay from "../Components/NewExpense/KeyboardDismissOverlay";
import { Categories } from "../Context/Categories";

const { width, height } = Dimensions.get("screen");

export default function NewExpense({ navigation }) {
  const amountInputRef = useRef(null);
  const expensesCtx = useContext(ExpensesContext);
  const [amount, setAmount] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("EXPENSE");
  const [category, setCategory] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const storeExpense = async (expense) => {
    const res = await Client.post("/add-expense", expense);
  };

  return (
    <KeyboardDismissOverlay>
      <>
        <View behavior="position" style={styles.container}>
          <Text style={styles.title}>Add Expenses</Text>
          <Pressable
            onPress={() => amountInputRef.current.focus()}
            style={styles.inputContainer}
          >
            <Text style={styles.dollarSign}>$</Text>
            <TextInput
              placeholder={showPlaceholder ? "0" : ""}
              placeholderTextColor="#000"
              ref={amountInputRef}
              style={styles.input}
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType="decimal-pad"
              maxLength={7}
              onFocus={() => setShowPlaceholder(false)}
              onBlur={() => setShowPlaceholder(true)}
            ></TextInput>
          </Pressable>
          <View style={styles.typeContainer}>
            <TypeButton
              type="INCOME"
              isPressed={type === "INCOME" ? true : false}
              setType={(type) => setType(type)}
            >
              Income
            </TypeButton>
            <TypeButton
              type="EXPENSE"
              isPressed={type === "EXPENSE" || type === "" ? true : false}
              setType={(type) => setType(type)}
            >
              Expense
            </TypeButton>
          </View>
          <View style={styles.categorySelectionContainer}>
            {type === "EXPENSE" && (
              <Button
                linearGradientBackground={true}
                containerStyle={{ marginTop: 16 }}
                onPress={() => {
                  Keyboard.dismiss();
                  setCategoryOpen((prevCategoryOpen) => !prevCategoryOpen);
                }}
              >
                Category
              </Button>
            )}
            {categoryOpen && (
              <CategoryDropdown
                data={Categories}
                icon={true}
                categorySelectHandler={(category) => {
                  setCategoryOpen(false);
                  setCategory(category);
                }}
              />
            )}
          </View>

          <TextInput
            maxLength={40}
            style={styles.noteInput}
            value={note}
            onChangeText={(text) => setNote(text)}
            placeholder="Enter a description..."
            placeholderTextColor={Colors.Grey}
          />
          <ShadowContainer>
            <LinearGradientBackground style={styles.datePickerContainer}>
              <DateTimePicker
                display="spinner"
                maximumDate={new Date()}
                value={date}
                style={styles.datePicker}
                textColor="#fff"
                onChange={(e, selectedDate) => setDate(selectedDate)}
              />
            </LinearGradientBackground>
          </ShadowContainer>

          <Button
            linearGradientBackground={false}
            containerStyle={styles.saveButton}
            textStyle={styles.saveButtonText}
            onPress={() => {
              const selectedMonth = date.toLocaleString("en", {
                month: "long",
              });
              if (
                type === "" ||
                (type === "EXPENSE" && category === "") ||
                !amount
              ) {
                Alert.alert(
                  "Oops...",
                  "Check if you entered an amount or a category."
                );
              } else {
                const expense = {
                  id: uuidv4(),
                  description: note,
                  amount: Number(amount),
                  date: date,
                  month: selectedMonth,
                  type: type,
                  category:
                    type === "INCOME"
                      ? {
                          iconName: "pricetag",
                          color: "#A0D995",
                        }
                      : category,
                };
                storeExpense(expense);
                expensesCtx.addExpense(expense);
                setNote("");
                setAmount("");
                setCategoryOpen(false);
                setDate(new Date());
                setType("EXPENSE");
                setCategory({});

                navigation.goBack();
              }
            }}
          >
            Save
          </Button>
        </View>
      </>
    </KeyboardDismissOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: Colors.White,
    alignItems: "center",
  },
  title: {
    color: Colors.Black,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
  },
  categorySelectionContainer: {
    zIndex: 100,
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: width * 0.9,
    height: 80,
    borderRadius: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  dollarSign: {
    fontSize: 24,
    marginRight: 4,
  },
  categoryContainer: {
    borderColor: "#333",
    borderWidth: 2,
  },
  input: {
    fontSize: 48,
  },
  typeContainer: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 8,
    marginTop: 16,
  },
  noteInput: {
    marginTop: 16,
    backgroundColor: "#fff",
    height: 56,
    width: width * 0.9,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  datePickerContainer: {
    borderRadius: 16,
    height: 100,
    width: width * 0.9,
    justifyContent: "center",
    marginVertical: 16,
  },
  datePicker: {
    width: "100%",
  },
  saveButton: {
    paddingVertical: 24,
  },
  saveButtonText: {
    fontSize: 24,
    fontWeight: "700",
  },
});

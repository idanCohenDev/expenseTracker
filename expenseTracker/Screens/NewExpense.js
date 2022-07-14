import { StyleSheet, Text, View, Keyboard, Dimensions } from "react-native";
import Input from "../Components/General/General/Input";
import React, { useState } from "react";
import { Colors } from "../styles/Colors";
import CategoryDropdown from "../Components/General/General/CategoryDropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import "react-native-get-random-values";
import Button from "../Components/General/General/Button";
import LinearGradientBackground from "../Components/General/Layouts/LinearGradientBackground";
import ShadowContainer from "../Components/General/Layouts/ShadowContainer";
import KeyboardDismissOverlay from "../Components/NewExpense/KeyboardDismissOverlay";
import { Categories } from "../Context/staticData";
import SaveButton from "../Components/NewExpense/SaveButton";
import AmountInput from "../Components/NewExpense/AmountInput";
import TypeContainer from "../Components/NewExpense/TypeContainer";

const { width, height } = Dimensions.get("screen");

export default function NewExpense({ navigation }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [details, setDetails] = useState({
    amount: "",
    category: "",
    date: new Date(),
    note: "",
    type: "EXPENSE",
    category: "",
  });
  const closeCategoryDropdown = () => setCategoryOpen(false);

  return (
    <KeyboardDismissOverlay onClick={() => setCategoryOpen(!categoryOpen)}>
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Add Expense</Text>
          <AmountInput
            onAmountChange={(amount) => setDetails({ ...details, amount: amount })}
            value={details.amount}
            closeDropdown={closeCategoryDropdown}
          />
          <TypeContainer
            type={details.type}
            onTypeChange={(type) => setDetails({ ...details, type: type })}
            closeDropdown={closeCategoryDropdown}
          />
          <View style={styles.categorySelectionContainer}>
            {details.type === "EXPENSE" && (
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
                customStyle={styles.categoryDropdown}
                data={Categories}
                icon={true}
                categorySelectHandler={(category) => {
                  setCategoryOpen(false);
                  setDetails();
                }}
              />
            )}
          </View>
          <Input
            inputConfig={{
              value: details.note,
              onChangeText: (text) => setDetails({ ...details, note: text }),
              placeholder: "Enter a description...",
              onFocus: () => setCategoryOpen(false),
            }}
          />
          <ShadowContainer>
            <LinearGradientBackground style={styles.datePickerContainer}>
              <DateTimePicker
                display="spinner"
                maximumDate={new Date()}
                value={details.date}
                style={styles.datePicker}
                textColor="#fff"
                onChange={(e, selectedDate) => {
                  Keyboard.dismiss();
                  setDetails({ ...details, date: selectedDate });
                  setCategoryOpen(false);
                }}
              />
            </LinearGradientBackground>
          </ShadowContainer>
          <SaveButton
            details={details}
            navigation={navigation}
            closeDropdown={closeCategoryDropdown}
            setDetails={(details) => setDetails(details)}
          />
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
  categoryDropdown: {
    width: width * 0.6,
    transform: [{ translateX: width * 0.15 }],
  },
  categorySelectionContainer: {
    zIndex: 1,
  },
  categoryContainer: {
    borderColor: "#333",
    borderWidth: 2,
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
});

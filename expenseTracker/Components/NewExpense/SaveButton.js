import Button from "../General/General/Button";
import { Alert, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ExpensesContext } from "../../Context/context";

export default function SaveButton({
  navigation,
  details,
  setDetails,
  closeDropdown,
}) {
  const expensesCtx = useContext(ExpensesContext);
  const { amount, category, date, note, type } = details;
  return (
    <Button
      linearGradientBackground={false}
      containerStyle={styles.saveButton}
      textStyle={styles.saveButtonText}
      onPress={() => {
        if (type === "" || (type === "EXPENSE" && category === "") || !amount) {
          Alert.alert("Oops...", "Check if you entered an amount or a category.");
        } else {
          const expense = {
            id: uuidv4(),
            description: note,
            amount: Number(amount),
            date: date,
            type: type,
            category:
              type === "INCOME"
                ? {
                    iconName: "cash",
                    color: "#A0D995",
                  }
                : category,
          };
          expensesCtx.addExpense(expense);
          closeDropdown();
          setDetails({
            amount: "",
            category: "",
            date: new Date(),
            note: "",
            type: "EXPENSE",
            category: {},
          });
          navigation.goBack();
        }
      }}
    >
      Save
    </Button>
  );
}

const styles = StyleSheet.create({
  saveButton: {
    paddingVertical: 24,
  },
  saveButtonText: {
    fontSize: 24,
    fontWeight: "700",
  },
});

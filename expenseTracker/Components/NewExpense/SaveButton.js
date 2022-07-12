import Button from "../General/Button";
import { Alert, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";

export default function SaveButton({ navigation, details }) {
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

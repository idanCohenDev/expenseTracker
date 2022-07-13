import { StyleSheet, View, Keyboard } from "react-native";
import TypeButton from "../General/TypeButton";

export default function TypeContainer({ onTypeChange, type, closeDropdown }) {
  return (
    <View style={styles.typeContainer}>
      <TypeButton
        type="INCOME"
        isPressed={type === "INCOME" ? true : false}
        setType={(type) => {
          Keyboard.dismiss();
          onTypeChange(type);
          closeDropdown();
        }}
      >
        Income
      </TypeButton>
      <TypeButton
        type="EXPENSE"
        isPressed={type === "EXPENSE" || type === "" ? true : false}
        setType={(type) => {
          Keyboard.dismiss();
          onTypeChange(type);
        }}
      >
        Expense
      </TypeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 8,
    marginTop: 16,
  },
});

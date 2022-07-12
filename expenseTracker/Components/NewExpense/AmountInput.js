import { StyleSheet, Text, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

export default function AmountInput({ onChangeAmount, value, closeDropdown }) {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const amountInputRef = useRef(null);
  return (
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
        value={value}
        onChangeText={(text) => onChangeAmount(text)}
        keyboardType="decimal-pad"
        maxLength={7}
        onFocus={() => {
          closeDropdown();
          setShowPlaceholder(false);
        }}
        onBlur={() => setShowPlaceholder(true)}
      ></TextInput>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  input: {
    fontSize: 48,
  },
});

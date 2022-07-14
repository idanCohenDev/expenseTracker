import { StyleSheet, TextInput, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function Input({ inputConfig }) {
  return <TextInput  style={styles.input} {...inputConfig} />;
}

const styles = StyleSheet.create({
  input: {
    marginTop: 16,
    backgroundColor: "#fff",
    height: 56,
    width: width * 0.9,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },
});

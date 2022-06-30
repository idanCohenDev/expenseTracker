import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";
import LineafGradientBackground from "./LinearGradientBackground";
import { Colors } from "../../styles/Colors";

export default function TypeButton({ isPressed, children, setType, type }) {
  return isPressed ? (
    <LineafGradientBackground style={styles.container}>
      <Pressable onPress={() => setType(type)}>
        <Text style={[styles.text, styles.textFocused]}>{children}</Text>
      </Pressable>
    </LineafGradientBackground>
  ) : (
    <View style={styles.container}>
      <Pressable onPress={() => setType(type)}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    width: "50%",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.Grey,
  },
  textFocused: {
    color: "#fff",
  },
});

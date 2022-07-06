import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";
import LineafGradientBackground from "./LinearGradientBackground";
import { Colors } from "../../styles/Colors";

export default function TypeButton({
  isPressed,
  setType,
  type,
  children,
  containerStyle,
  textStyle,
}) {
  const button = (
    <Pressable onPress={() => setType(type)}>
      <Text style={[styles.text, isPressed && styles.textFocused, textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
  return isPressed ? (
    <LineafGradientBackground style={[styles.container, containerStyle]}>
      {button}
    </LineafGradientBackground>
  ) : (
    <View style={[styles.container, containerStyle]}>{button}</View>
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

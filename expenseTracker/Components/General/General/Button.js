import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import LinearGradientBackground from "../Layouts/LinearGradientBackground";
import ShadowContainer from "../Layouts/ShadowContainer";

const { width, height } = Dimensions.get("screen");

export default function Button({
  onPress,
  textStyle,
  children,
  containerStyle,
  linearGradientBackground,
}) {
  const button = (
    <Text
      style={[
        styles.text,
        textStyle,
        { color: linearGradientBackground ? "#fff" : "#000" },
      ]}
    >
      {children}
    </Text>
  );
  return linearGradientBackground ? (
    <ShadowContainer>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <LinearGradientBackground style={[styles.container, containerStyle]}>
          {button}
        </LinearGradientBackground>
      </Pressable>
    </ShadowContainer>
  ) : (
    <ShadowContainer>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.container, styles.whiteContainer, containerStyle]}>
          {button}
        </View>
      </Pressable>
    </ShadowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    paddingVertical: 8,
    borderRadius: 16,
  },
  whiteContainer: {
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
  },
  pressed: {
    opacity: 0.8,
  },
});

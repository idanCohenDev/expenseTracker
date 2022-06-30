import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import LinearGradientBackground from "./LinearGradientBackground";
import ShadowContainer from "./ShadowContainer";

const { width, height } = Dimensions.get("screen");

export default function Button({
  onPress,
  textStyle,
  children,
  containerStyle,
  linearGradientBackground,
}) {
  const button = (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
      <Text
        style={[
          styles.text,
          textStyle,
          { color: linearGradientBackground ? "#fff" : "#000" },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
  return linearGradientBackground ? (
    <ShadowContainer>
      <LinearGradientBackground style={[styles.container, containerStyle]}>
        {button}
      </LinearGradientBackground>
    </ShadowContainer>
  ) : (
    <ShadowContainer>
      <View style={[styles.container, styles.whiteContainer, containerStyle]}>
        {button}
      </View>
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

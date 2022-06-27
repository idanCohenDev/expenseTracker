import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { Colors } from "../../styles/Colors";

const { width, height } = Dimensions.get("window");

export default function Container({ children, style }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: height,
    width: width,
    backgroundColor: Colors.White,
  },
});

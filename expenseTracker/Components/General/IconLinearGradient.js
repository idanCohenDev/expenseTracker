import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function IconLinearGradient({ children, color }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#fff", color]}
      locations={[0, 0.4]}
      style={styles.iconContainer}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
});

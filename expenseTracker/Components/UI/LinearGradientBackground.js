import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearGradientBackground({ children, style }) {
  return (
    <LinearGradient
      style={style}
      colors={["#32A6E5", "#CE68F7", "#FB9374"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
}

import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Icon({ name, size, color }) {
  return <Ionicons name={name} size={size} color={color} />;
}

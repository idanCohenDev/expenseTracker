import { Keyboard, TouchableWithoutFeedback } from "react-native";
import React from "react";

export default function KeyboardDismissOverlay({ children, onClick }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onClick();
        Keyboard.dismiss();
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}

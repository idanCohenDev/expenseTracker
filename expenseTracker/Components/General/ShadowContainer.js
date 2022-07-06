import { StyleSheet, View } from "react-native";
import { Colors } from "../../styles/Colors";

export default function ShadowContainer({ shadowStyle, children }) {
  return <View style={[styles.container, shadowStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.Grey,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
});

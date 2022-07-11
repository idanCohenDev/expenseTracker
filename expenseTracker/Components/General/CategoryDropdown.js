import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import Icon from "./Icon";
import { Colors } from "../../styles/Colors";

const { width, height } = Dimensions.get("screen");

export default function CategoryDropdown({
  categorySelectHandler,
  data,
  icon,
  customStyle,
}) {
  const categoriesElements = data.map((category) => {
    return (
      <Pressable
        key={category.name}
        onPress={() => categorySelectHandler(icon ? category : category.name)}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: Colors.Grey,
          }}
        >
          <View
            style={[
              styles.categoryContainer,
              icon && { justifyContent: "flex-start" },
            ]}
          >
            {icon && (
              <View
                style={[styles.iconContainer, { backgroundColor: category.color }]}
              >
                <Icon name={category.iconName} size={32} color="#fff" />
              </View>
            )}
            <Text style={styles.text}>{category.name}</Text>
          </View>
        </View>
      </Pressable>
    );
  });
  return (
    <ScrollView style={[styles.categoriesContainer, customStyle]}>
      {categoriesElements}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    borderColor: Colors.Grey,
    borderWidth: 1,
    backgroundColor: "#fff",
    position: "absolute",
    height: 300,
    bottom: -300,
    width: width * 0.4,
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    width: "80%",
    justifyContent: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  pressed: {
    opacity: 0.8,
  },
});

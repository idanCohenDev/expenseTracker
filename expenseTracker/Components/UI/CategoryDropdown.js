import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";
import Icon from "./Icon";
import { Colors } from "../../styles/Colors";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const { width, height } = Dimensions.get("screen");

const Categories = [
  { name: "Housing", iconName: "home", color: "#FFBD37" },
  { name: "Transportation", iconName: "car", color: "#FF7396" },
  { name: "Food", iconName: "fast-food", color: "#248CED" },
  { name: "Utilities", iconName: "cog", color: "#0BBFA3" },
  { name: "Insurance", iconName: "briefcase", color: "#A64B2A" },
  { name: "Medical & Healthcare", iconName: "heart", color: "#9F57E3" },
  { name: "Saving", iconName: "cash", color: "#656565" },
  { name: "Personal Spending", iconName: "body", color: "#810955" },
  { name: "Recreation & Entertainment", iconName: "film", color: "#2F8F9D" },
];
export default function CategoryDropdown({ categorySelectHandler }) {
  const categoriesElements = Categories.map((category) => {
    return (
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => categorySelectHandler(category)}
      >
        <View style={styles.categoryContainer}>
          <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
            <Icon name={category.iconName} size={32} color="#fff" />
          </View>
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </Pressable>
    );
  });
  return (
    <ScrollView style={styles.categoriesContainer}>{categoriesElements}</ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    borderColor: Colors.Grey,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  categoryContainer: {
    flexDirection: "row",
    borderBottomColor: Colors.Grey,
    borderBottomWidth: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
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

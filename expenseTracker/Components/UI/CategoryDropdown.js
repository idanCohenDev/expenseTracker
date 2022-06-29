import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import Icon from "./Icon";
import { Colors } from "../../styles/Colors";
import { Categories } from "../../Context/Categories";

export default function CategoryDropdown({ categorySelectHandler }) {
  const categoriesElements = Categories.map((category) => {
    return (
      <Pressable
        key={category.name}
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

import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import Icon from "./Icon";
import { Colors } from "../../styles/Colors";

export default function CategoryDropdown({
  categorySelectHandler,
  data,
  icon,
  customStyle,
}) {
  const categoriesElements = data.map((category) => {
    return (
      <Pressable key={category.name} onPress={() => categorySelectHandler(category.name)}>
        <View style={styles.categoryContainer}>
          {icon && (
            <View
              style={[styles.iconContainer, { backgroundColor: category.color }]}
            >
              <Icon name={category.iconName} size={32} color="#fff" />
            </View>
          )}
          <Text style={styles.text}>{category.name}</Text>
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
    bottom: 0,
    transform: [{ translateY: 320 }, { translateX: -160 }],
    left: "50%",
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

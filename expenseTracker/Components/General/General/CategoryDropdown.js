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
import { Colors } from "../../../styles/Colors";
import IconLinearGradient from "../Layouts/IconLinearGradient";

const { width, height } = Dimensions.get("screen");

export default function CategoryDropdown({
  categorySelectHandler,
  data,
  icon,
  customStyle,
}) {
  const categoriesElements = data.map((category, i, arr) => {
    return (
      <Pressable
        key={category.name}
        onPress={() => {
          data.forEach((category) => {
            category.selected = false;
          });
          category.selected = !category.selected;
          categorySelectHandler(icon ? category : category.name);
        }}
        style={{
          backgroundColor: category.selected ? "rgba(2,150,255, 0.3)" : "#fff",
        }}
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
              <IconLinearGradient color={category.color}>
                <Icon name={category.iconName} size={32} color="#fff" />
              </IconLinearGradient>
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
  pressed: {
    opacity: 0.8,
  },
});

import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Categories } from "../Context/Categories";
import Icon from "../Components/UI/Icon";
import { ExpensesContext } from "../Context/Context";
import { Colors } from "../styles/Colors";
import { LinearTextGradient } from "react-native-text-gradient";

export default function CustomDrawerContent(props) {
  const expenseCtx = useContext(ExpensesContext);
  const [selectedCategory, setSelectedCategory] = useState(expenseCtx.category);
  const drawerItems = Categories.map((category, index) => {
    return (
      <DrawerItem
        style={[
          styles.container,
          selectedCategory === category.name ? styles.focused : styles.notFocused,
        ]}
        key={index}
        label={category.name}
        labelStyle={[
          styles.label,
          selectedCategory === category.name ? styles.focusedLabel : styles.label,
        ]}
        icon={() => (
          <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
            <Icon name={category.iconName} size={24} color="#fff" />
          </View>
        )}
        onPress={() => {
          setSelectedCategory(category.name);
          expenseCtx.chooseCategory(category.name);
          props.navigation.navigate("TabNavigator");
        }}
      />
    );
  });
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={() => (
          <View style={styles.iconContainer}>
            <Icon name="alert" size={24} color="#fff" />
          </View>
        )}
        style={[
          styles.container,
          selectedCategory === "" ? styles.focused : styles.notFocused,
        ]}
        label={"All Expenses"}
        labelStyle={[
          styles.label,
          selectedCategory === "" ? styles.focusedLabel : styles.label,
        ]}
        onPress={() => {
          setSelectedCategory("");
          expenseCtx.chooseCategory("");
          props.navigation.navigate("TabNavigator");
        }}
      />
      {drawerItems}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    width: "100%",
  },
  focusedLabel: {
    color: "#fff",
  },
  iconContainer: {
    backgroundColor: "#134234",
    width: 40,
    height: 40,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  focused: {
    backgroundColor: Colors.Grey,
  },
  notFocused: {
    backgroundColor: Colors.White,
  },
});

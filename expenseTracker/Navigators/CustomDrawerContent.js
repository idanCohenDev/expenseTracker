import { StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Categories } from "../Context/staticData";
import Icon from "../Components/General/General/Icon";
import { ExpensesContext } from "../Context/context";
import IconLinearGradient from "../Components/General/Layouts/IconLinearGradient";

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
          <IconLinearGradient color={category.color}>
            <Icon name={category.iconName} size={32} color="#fff" />
          </IconLinearGradient>
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
          <IconLinearGradient color="#27AEE2">
            <Icon name="list" size={24} color="#fff" />
          </IconLinearGradient>
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
    fontSize: 14,
  },
  focused: {
    backgroundColor: "rgba(2,150,255, 0.3)",
  },
  notFocused: {
    backgroundColor: "#fff",
  },
});

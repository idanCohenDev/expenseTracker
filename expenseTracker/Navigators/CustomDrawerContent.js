import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Categories } from "../Context/Categories";
import Icon from "../Components/UI/Icon";
import { ExpensesContext } from "../Context/Context";
import { Colors } from "../styles/Colors";

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
        labelStyle={styles.label}
        icon={() => (
          <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
            <Icon name={category.iconName} size={32} color="#fff" />
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
        style={[
          styles.container,
          selectedCategory === "" ? styles.focused : styles.notFocused,
        ]}
        label={"All Expenses"}
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
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  focused: {
    backgroundColor: "#333",
  },
  notFocused: {
    backgroundColor: Colors.Grey,
  },
});

import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../Screens/AllExpenses";
import MonthlyExpenses from "../Screens/MonthlyExpenses";
import Icon from "../Components/UI/Icon";
import { Colors } from "../styles/Colors";
import NewExpense from "../Screens/NewExpense";
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: height * 0.1,
        },
        tabBarActiveTintColor: Colors.Black,
        tabBarInactiveTintColor: Colors.Grey,
      }}
    >
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="list"
              size={32}
              color={focused ? Colors.Black : Colors.Grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewExpense"
        component={NewExpense}
        options={{
          tabBarButton: (props) => {
            return (
              <TouchableOpacity {...props}>
                <View style={styles.addButton}>
                  <Icon name="add" size={48} color="#fff" />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="MonthlyExpenes"
        component={MonthlyExpenses}
        options={{
          tabBarLabel: "This Month",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="calendar"
              size={32}
              color={focused ? Colors.Black : Colors.Grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: Colors.Black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: 72,
    height: 72,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -36 }],
    shadowColor: Colors.Grey,
    shadowOffset: { width: 0, heigth: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
});

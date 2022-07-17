import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../Screens/AllExpenses";
import MonthlyExpenses from "../Screens/MonthlyExpenses";
import Icon from "../Components/General/General/Icon";
import { Colors } from "../styles/Colors";
import NewExpense from "../Screens/NewExpense";
import { useContext, useState } from "react";
import { ExpensesContext } from "../Context/context";
import LinearGradientBackground from "../Components/General/Layouts/LinearGradientBackground";
import ShadowContainer from "../Components/General/Layouts/ShadowContainer";
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");

export default function TabNavigator() {
  const expensesCtx = useContext(ExpensesContext);
  const currentMonth = new Date().toLocaleString("en", { month: "long" });
  const currentYear = new Date().toLocaleString("en", { year: "numeric" });
  const [userSelection, setUserSelection] = useState({
    month: currentMonth,
    year: currentMonth,
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          height: height * 0.1,
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: Colors.Grey,
      }}
    >
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarLabel: expensesCtx.category ? expensesCtx.category : "All Expenses",
          tabBarIcon: ({ focused }) => (
            <Icon name="list" size={32} color={focused ? "#000" : Colors.Grey} />
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
                <ShadowContainer shadowStyle={styles.addButton}>
                  <LinearGradientBackground style={styles.addButton}>
                    <Icon name="md-add" size={48} color="#fff" />
                  </LinearGradientBackground>
                </ShadowContainer>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="MonthlyExpenes"
        component={MonthlyExpenses}
        options={{
          tabBarLabel: `Monthly`,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="calendar"
              size={32}
              color={focused ? Colors.Black : Colors.Grey}
            />
          ),
        }}
        initialParams={{
          setSelectedMonth: (month) =>
            setUserSelection({ ...userSelection, month: month }),
          setSelectedYear: (year) =>
            setUserSelection({ ...userSelection, year: year }),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: 72,
    height: 72,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -36 }],
  },
  pressed: {
    opacity: 0.8,
  },
});

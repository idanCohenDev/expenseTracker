import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ExpensesContextProvider from "./Context/Context";
import DrawerNavigator from "./Navigators/DrawerNavigator";
export default function App() {
  return (
    <>
    <StatusBar style="dark"/>
    <ExpensesContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ExpensesContextProvider>
    </>
  );
}

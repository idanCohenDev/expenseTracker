import { NavigationContainer } from "@react-navigation/native";
import ExpensesContextProvider from "./Context/Context";
import DrawerNavigator from "./Navigators/DrawerNavigator";
export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}

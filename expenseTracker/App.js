import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Navigators/TabNavigator";
import ExpensesContextProvider from "./Context/Context";

export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}

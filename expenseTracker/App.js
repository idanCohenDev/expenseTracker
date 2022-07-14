import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ExpensesContextProvider from "./Context/context";
import DrawerNavigator from "./Navigators/DrawerNavigator";
import SignInStackNavigator from "./Navigators/SignInStackNavigator";
import { useState } from "react";

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <StatusBar style="dark" />
      <ExpensesContextProvider>
        <NavigationContainer>
          {signedIn ? <DrawerNavigator /> : <SignInStackNavigator />}
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

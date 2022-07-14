import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn";
import ForgotPassword from "../Screens/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function SignInStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

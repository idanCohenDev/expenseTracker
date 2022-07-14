import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Input from "../Components/General/General/Input";
import Button from "../Components/General/General/Button";
export default function SignIn({ navigation }) {
  const navigate = navigation.navigate;
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
  return (
    <View>
      <Text style={styles.title}>Welcome to Expense Tracker</Text>
      <Text style={styles.subtitle}>Sign In</Text>
      <Input
        inputConfig={{
          placeholder: "Enter Email",
          onChangeText: (username) => setDetails({ ...details, username: username }),
          value: details.username,
        }}
      />

      <Input
        inputConfig={{
          secureTextEntry: true,
          placeholder: "Enter Password",
          onChangeText: (password) => setDetails({ ...details, password: password }),
          value: details.password,
        }}
      />
      <Button linearGradientBackground={true} onPress={() => {}}>
        Sign In
      </Button>
      <Button
        linearGradientBackground={false}
        onPress={() => {
          navigate("SignUp");
        }}
      >
        Register
      </Button>
      <Text onPress={() => navigate("ForgotPassword")}>
        Forgot Password? Don't Worry!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {},
});

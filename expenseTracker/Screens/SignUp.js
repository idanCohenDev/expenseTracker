import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Input from "../Components/General/General/Input";
import Button from "../Components/General/General/Button";

export default function SignUp() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <View>
      <Text>SignUp</Text>
      <View>
        <Input
          inputConfig={{
            placeholder: "First Name",
            onChangeText: (text) => setDetails({ ...details, firstName: text }),
            value: details.firstName,
          }}
        />
        <Input
          inputConfig={{
            placeholder: "Last Name",
            onChangeText: (text) => setDetails({ ...details, lastName: text }),
            value: details.lastName,
          }}
        />
      </View>
      <Input
        inputConfig={{
          placeholder: "Email",
          onChangeText: (text) => setDetails({ ...details, email: text }),
          value: details.email,
        }}
      />
      <Input
        inputConfig={{
          placeholder: "Password",
          onChangeText: (text) => setDetails({ ...details, password: text }),
          value: details.password,
        }}
      />
      <Input
        inputConfig={{
          placeholder: "Confirm Password",
          onChangeText: (text) => setDetails({ ...details, confirmPassword: text }),
          value: details.confirmPassword,
        }}
      />
      <Button linearGradientBackground={true}>Sign Up</Button>
    </View>
  );
}

const styles = StyleSheet.create({});

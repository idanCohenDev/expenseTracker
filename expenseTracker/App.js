import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Navigators/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

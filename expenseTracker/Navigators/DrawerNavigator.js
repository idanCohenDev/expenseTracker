import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { Colors } from "../styles/Colors";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: {
          backgroundColor: Colors.White,
          shadowOpacity: 0,
        },
        headerTintColor: "#000",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ title: "All Expenses" }}
      />
    </Drawer.Navigator>
  );
}

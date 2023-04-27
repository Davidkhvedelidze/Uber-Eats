import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ROUTES from "../constants/routes";
import SettingsScreen from "../screens/SettingsScreen";
import SettingsDetails from "../screens/SettingsDetails";

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS_DETAILS}
        component={SettingsDetails}
        options={{
          title: "Setting Details",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;

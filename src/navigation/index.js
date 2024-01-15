import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "../screens/Homescreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Settingsscreen from "../screens/Settingsscreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Settings" component={Settingsscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

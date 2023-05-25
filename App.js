import AuthNavigator from "./src/Navigators/AuthNavigator";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("./assets/Fonts/UberMoveBold.otf"),
    "Uber-Medium": require("./assets/Fonts/UberMoveBold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (fontsLoaded) onLayoutRootView();
  if (!fontsLoaded) {
    return null;
  }

  return <AuthNavigator />;
}

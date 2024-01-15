import { useFonts } from "expo-font";
import Loader from "../../shared/Loader";
import { useCallback } from "react";
import { Text, View } from "react-native";

export default function CustomFont({ children }) {
  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../fonts/Poppins-Thin.ttf"),
    "Poppins-Regular": require("../fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../fonts/Poppins-Bold.ttf"),
    "Poppins-Italic": require("../fonts/Poppins-Italic.ttf"),
    "Poppins-Black": require("../fonts/Poppins-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    // You can perform any actions here if needed
  }, []);

  if (!fontsLoaded) {
    // If fonts are not loaded, you can return null or render a loading indicator
    return <Loader />;
  }

  // If fonts are loaded, execute the onLayoutRootView callback
  onLayoutRootView();

  // Optionally, you can render the children components passed to Font
  return children;
}

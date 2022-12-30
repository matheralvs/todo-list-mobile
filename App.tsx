import { StatusBar } from "react-native";
import { setCustomText, setCustomTextInput } from "react-native-global-props";
import { useFonts } from "expo-font";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // Setting default styles for all Text components.
  const customTextProps = {
    style: {
      fontSize: 16,
      fontFamily: "Inter-Regular",
      color: "#f2f2f2",
    },
  };

  const customTextInputProps = {
    style: {
      fontSize: 16,
      fontFamily: "Inter-Regular",
      color: "white",
    },
  };

  // Calling the functions and passing the custom props into their respective params
  setCustomText(customTextProps);
  setCustomTextInput(customTextInputProps);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}

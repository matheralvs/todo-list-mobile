import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import todoLogo from "../../assets/logo.png";

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerImage} source={todoLogo} />
    </View>
  );
}

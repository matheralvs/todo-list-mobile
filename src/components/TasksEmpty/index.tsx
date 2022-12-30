import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import clipboard from "../../assets/clipboard.png";

export function TasksEmpty() {
  return (
    <View style={styles.tasksEmptyContainer}>
      <Image style={styles.tasksEmptyImage} source={clipboard} />
      <View style={styles.tasksEmptyTextContainer}>
        <Text style={styles.tasksEmptyTextBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.tasksEmptyTextRegular}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}

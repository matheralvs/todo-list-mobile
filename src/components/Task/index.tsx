import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ChangeEvent, useState } from "react";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ITask } from "../../screens/Home";

interface TaskProps extends ITask {
  onDelete: (taskId: number) => void;
  onCompleted: (taskId: number) => void;
}

export function Task({
  id,
  content,
  isCompleted,
  onDelete,
  onCompleted,
}: TaskProps) {
  const [isPressed, setIsPressed] = useState(false);

  function handleTaskToDelete() {
    onDelete(id);
  }

  function handlePressedButton() {
    if (isPressed === false) {
      setIsPressed(true);
    } else {
      setIsPressed(false);
    }
  }

  function handleTaskToCompleted() {
    onCompleted(id);
  }

  return (
    <View
      style={isCompleted ? styles.taskContainerChecked : styles.taskContainer}
    >
      <BouncyCheckbox
        size={22}
        isChecked={isCompleted}
        fillColor={isCompleted ? "#5E60CE" : "#4EA8DE"}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={handleTaskToCompleted}
      />
      <Text style={isCompleted ? styles.taskTextChecked : styles.taskText}>
        {content}
      </Text>
      <TouchableOpacity
        style={isPressed ? styles.taskButtonPressed : styles.taskButton}
        onPress={handleTaskToDelete}
        onPressIn={handlePressedButton}
        onPressOut={handlePressedButton}
      >
        <Feather
          name="trash-2"
          size={20}
          color={isPressed ? "#E25858" : "#808080"}
        />
      </TouchableOpacity>
    </View>
  );
}

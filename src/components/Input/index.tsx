import { TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";

interface InputProps {
  inputValue: string;
  onChangeText: (text: string) => void;
  onNewTask: () => void;
}

export function Input({ inputValue, onChangeText, onNewTask }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  function handleToggleFocused(state: boolean) {
    setIsFocused(state);
  }

  function handleTextValue(e: string) {
    onChangeText(e);
  }

  function handleNewTask() {
    onNewTask();
  }

  function handlePressedButton() {
    if (isPressed === false) {
      setIsPressed(true);
    } else {
      setIsPressed(false);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={isFocused ? styles.inputTextFocused : styles.inputText}
        value={inputValue}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        selectionColor="#f2f2f2"
        onFocus={() => handleToggleFocused(true)}
        onBlur={() => handleToggleFocused(false)}
        onChangeText={handleTextValue}
      />
      <TouchableOpacity
        style={isPressed ? styles.inputButtonPressed : styles.inputButton}
        onPress={handleNewTask}
        onPressIn={handlePressedButton}
        onPressOut={handlePressedButton}
      >
        <Feather name="plus-circle" size={18} color="#f2f2f2" />
      </TouchableOpacity>
    </View>
  );
}

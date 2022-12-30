import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: -27,
  },
  inputText: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#f2f2f2",
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0D0D0D",
  },
  inputTextFocused: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#f2f2f2",
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#5E60CE",
  },
  inputButton: {
    backgroundColor: "#1E6F9F",
    padding: 20,
    borderRadius: 6,
    marginLeft: 4,
  },
  inputButtonPressed: {
    backgroundColor: "#4EA8DE",
    padding: 20,
    borderRadius: 6,
    marginLeft: 4,
  },
});

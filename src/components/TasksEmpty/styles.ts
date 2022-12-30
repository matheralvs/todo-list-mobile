import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksEmptyContainer: {
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  tasksEmptyImage: {
    width: 56,
    height: 56,
  },
  tasksEmptyTextContainer: {
    marginTop: 16,
    alignItems: "center",
    textAlign: "center",
  },
  tasksEmptyTextBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
  },
  tasksEmptyTextRegular: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#808080",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksContainer: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 32,
  },
  tasksInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tasksCreated: {
    flexDirection: "row",
    alignItems: "center",
  },
  tasksCreatedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  tasksCreatedCount: {
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    marginLeft: 8,
  },
  tasksCreatedCountText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#D9D9D9",
  },

  tasksCompleted: {
    flexDirection: "row",
  },
  tasksCompletedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8284FA",
  },
  tasksCompletedCount: {
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    marginLeft: 8,
  },
  tasksCompletedCountText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
});

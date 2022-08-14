import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 8,
  },
  taskText: {
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "400",
    width: "80%",
    height: 48,
  },
  buttonCheck: {},
  buttonRemove: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
});

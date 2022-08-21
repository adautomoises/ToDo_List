import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  containerTask: {
    width: '80%',
  },
  contentContainer:{
    paddingBottom: 24
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#FFF',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through',
  },
  listEmpty:{
    paddingTop: 48,
    paddingBottom: 48,
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
  },
  listEmptyTitle:{
    color: 'gray',
    fontSize: 14,
    fontWeight: "bold",
  },
  listEmptySubtitle:{
    color: 'gray',
    fontSize: 14,
  },
});

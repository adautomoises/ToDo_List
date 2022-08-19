import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'#1A1A1A',
    alignItems: 'center',

  },
  container:{
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
    paddingTop: 30,
  },
  textTo: {
    color: '#4EA8DE',
    fontSize: 40,
    fontWeight: 'bold'
  },
  textDo: {
    color: '#5E60CE',
    fontSize: 40,
    fontWeight: 'bold'
  },
  input:{
    flexDirection: 'row',
    position: 'absolute',
    left: 24,
    right: 24,
    top: 142,
  },
  textInput:{
    color:'#F2F2F2',
    width: 327,
    height: 54,
    padding:16,
    backgroundColor: '#262626',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 12,
    borderRadius: 6,
  },
  buttonInput:{
    width: 54,
    height: 54,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasks:{
    flex:1,
    width: 400,
    marginLeft: 24,
    marginRight: 24,
  },
  tasksInfo:{
    marginTop: 55,
    marginBottom: 21,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  tasksCreatedInfo:{
    flexDirection: 'row',
  },
  textCreated:{
    color: '#4EA8DE',
    marginRight: 12,
  },
  viewCreatedCount:{
    backgroundColor: '#333333',
    borderRadius: 50,
    width: 31,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCreatedCount:{
    color: '#FFF',
  },
  
  tasksDoneInfo:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDone:{
    color: '#8284FA',
    marginRight: 12,
  },
  viewDoneCount:{
    backgroundColor: '#333333',
    borderRadius: 50,
    width: 31,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textDoneCount: {
    color: '#FFF',
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
  taskContainer:{
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
  taskText: {
    width: '80%',
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "400",
    height: 48,
    marginLeft: 12,
    marginRight: 12,
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

})
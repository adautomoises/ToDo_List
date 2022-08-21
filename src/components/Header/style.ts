import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen:{
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
  tasks:{
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
})
import { DatePickerAndroid, StyleSheet } from "react-native";

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
    width: '88.5%',
  },
  tasksInfo:{
    marginTop: 55,
    marginBottom: 21,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  tasksCreated:{
    color: '#4EA8DE'
  },
  tasksDone:{
    color: '#8284FA'
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

})
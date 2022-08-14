import { View, Text, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './style';
import { useState } from 'react';
import { Task } from '../../components/Tasks'

export function Home(){
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksName, setTasksName] = useState("");


  function handleTaskAdd() {
    if(tasksName === ""){
      return Alert.alert("Não foi possível adicionar","Digite o nome da tarefa.")

    }
    if(tasks.includes(tasksName)){
      return Alert.alert("Não foi possível adicionar","Já existe essa tarefa na lista.")
    }
    setTasks(prevState => [...prevState, tasksName])
    setTasksName("")
  }
  function handleTaskRemove(name: String) {
    return Alert.alert("Remover",`Remover a tarefa ${name}?`,[
      {
        text: "Sim",
        onPress: () =>   setTasks(prevState =>prevState.filter(tasks => tasks !== name))
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])
  }
  function handleTaskCheck(name: String){

  }

  return(
    <View style={styles.screen}>
      <View style={styles.container}>
        <FontAwesome5 name="react" size={40} color="#4EA8DE" />
        <Text style={styles.textTo}> to</Text>
        <Text style={styles.textDo}>do</Text>
      </View>
      <View style={styles.input}>
        <TextInput
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor= '#808080'
        onChangeText={setTasksName}
        value={tasksName}
        />
        <TouchableOpacity style={styles.buttonInput} onPress={handleTaskAdd}>
          <FontAwesome5 name="plus-square" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.tasks}>
        <View style={styles.tasksInfo}>
          <View><Text style={styles.tasksCreated}>Criadas</Text></View>
          <View><Text style={styles.tasksDone}>Concluídas</Text></View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
            key={item}
            onRemove={() => handleTaskRemove(item)}
            onCheck={() => handleTaskCheck(item)}
            />
            )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <FontAwesome5 name="clipboard-list" size={60} color="#808080" />
              <Text style={styles.listEmptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptySubtitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
            )}
        />

      </View>


    </View>
  )
}
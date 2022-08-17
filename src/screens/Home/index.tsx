import { View, Text, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './style';
import { useState } from 'react';
import { Task } from '../../components/Tasks'

export function Home() {
  const [tasks, setTasks] = useState<{}>([]);
  const [tasksName, setTasksName] = useState("");
  const [status, setStatus] = useState(false)
  const [remove, setRemove] = useState(false)


  function handleTaskAdd() {
    const data = { name: tasksName, key: tasksName, status: status, remove: remove }

    setTasks(prevState => [...prevState, data])
    setTasksName("")

  }
  function handleTaskRemove(name: string) {
    if (remove == true) {
      setTasks(tasks.filter(function (data) { return data.name !== name; }));
      setRemove(false)
    } else {
      return setRemove(true)
    }
  }
  function handleTaskCheck(name: string) {
  }

  return (
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
          placeholderTextColor='#808080'
          onChangeText={setTasksName}
          value={tasksName}
        />
        <TouchableOpacity style={styles.buttonInput} onPress={handleTaskAdd}>
          <FontAwesome5 name="plus-square" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.tasks}>
        <View style={styles.tasksInfo}>
          <View style={styles.tasksCreatedInfo}>
            <Text style={styles.textCreated}>Criadas</Text>
            <View style={styles.viewCreatedCount}>
              <Text style={styles.textCreatedCount}>0</Text>
            </View>
          </View>
          <View style={styles.tasksDoneInfo}>
            <Text style={styles.textDone}>Concluídas</Text>
            <View style={styles.viewDoneCount}>
              <Text style={styles.textDoneCount}>0</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            // <Task
            // status={false}
            // key={item.key}
            // name={item.name}
            // onRemove={() => handleTaskRemove(item.name)}
            // onCheck={() => handleTaskCheck(item.name)}
            // />
            <View style={styles.taskContainer}>
              <TouchableOpacity style={styles.buttonCheck} 
              onPress={() => handleTaskCheck(item.name)}
              >
                <FontAwesome5 name="circle" size={20} color="#4EA8DE" />
              </TouchableOpacity>
              <Text style={styles.taskText}>{item.name}</Text>
              <TouchableOpacity style={styles.buttonRemove}
                onPress={() => handleTaskRemove(item.name)}
              >
                <FontAwesome5 name="trash-alt" size={16} color={remove == false ? 'gray' : 'red'} />
              </TouchableOpacity>
            </View>
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
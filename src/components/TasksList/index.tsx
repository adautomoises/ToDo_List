// import { View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';

// export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  // return(
    //   <View style={styles.container}>
    //     <TouchableOpacity style={styles.buttonCheck} onPress={onCheck}>
    //       <FontAwesome5 name="circle" size={20} color="#4EA8DE" />
    //     </TouchableOpacity>
  //     <Text style={styles.taskText}>{name}</Text>
  //     <TouchableOpacity style={styles.buttonRemove} 
  //     onPress={onRemove}
  //     >
  //       <FontAwesome5 name="trash-alt" size={16} color='gray'/>
  //     </TouchableOpacity>
  //   </View>
  // )
  // }
  
  {/* <FlatList
          data={task}
          keyExtractor={(item: any) => item}
          renderItem={( item: { id: any; title: any; } ) => (
            <Task
            key={item.id}
              name={item.title}
              onRemove={() => handleTaskRemove()}
              onCheck={() => handleTaskCheck()}
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
              /> */}

              

import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './style';
import { ItemWrapper } from '../ItemWrapper';


export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
                >
                <View 
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  { item.done && 
                  (
                    <FontAwesome5 name="circle" size={20} color="#4EA8DE" />
                  )
                  }
                </View>

                <Text 
                  style={item.done ? styles.taskTextDone : styles.taskText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ paddingHorizontal: 24 }}
              onPress={() => removeTask(item.id)}
              
            >
              <FontAwesome5 name="trash-alt" size={16} color='gray'/>
              </TouchableOpacity>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}
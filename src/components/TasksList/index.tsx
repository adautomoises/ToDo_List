import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon  from 'react-native-vector-icons/Feather';
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
      contentContainerStyle={ styles.contentContainer}
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
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View style={styles.containerTask}>
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
                    <Icon 
                      name="check"
                      size={12}
                      color="#FFF"
                    />
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
        backgroundColor:'#1A1A1A',
      }}
    />
  )
}
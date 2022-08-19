import React from 'react';
import { View, Text} from 'react-native';
import { styles } from './style';
import { FontAwesome5 } from '@expo/vector-icons';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  return (
    <View style={styles.screen}>
    <View style={styles.container}>
      <FontAwesome5 name="react" size={40} color="#4EA8DE" />
      <Text style={styles.textTo}> to</Text>
      <Text style={styles.textDo}>do</Text>
    </View>
      <View style={styles.tasks}>
        <View style={styles.tasksInfo}>
          <View style={styles.tasksCreatedInfo}>
            <Text style={styles.textCreated}>Criadas</Text>
            <View style={styles.viewCreatedCount}>
              <Text style={styles.textCreatedCount}>{tasksCounter}</Text>
            </View>
          </View>
          <View style={styles.tasksDoneInfo}>
            <Text style={styles.textDone}>Concluídas</Text>
            <View style={styles.viewDoneCount}>
              <Text style={styles.textDoneCount}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
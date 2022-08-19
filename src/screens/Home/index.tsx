import { View } from 'react-native';
import { styles } from './style';
import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Task, TasksList } from '../../components/TasksList';
import { TodoInput } from '../../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function handleAddTask(newTaskTitle: string) {
  }
  function handleRemoveTask(id: number) {
  }
  function handleToggleTaskDone(id: number) {
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}
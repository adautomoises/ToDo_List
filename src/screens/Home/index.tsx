import { View } from 'react-native';
import { styles } from './style';
import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Task, TasksList } from '../../components/TasksList';
import { TodoInput } from '../../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(prevState => [...prevState, newTask])
  }
  function handleToggleTaskDone(id: number) {
  }
  function handleRemoveTask(id: number) {
    const uptadeTask = tasks.filter(task => task.id !== id);
    setTasks(uptadeTask);
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
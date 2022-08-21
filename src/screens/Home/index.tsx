import { View } from 'react-native';
import { styles } from './style';
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Task, TasksList } from '../../components/TasksList';
import { TodoInput } from '../../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const textDoneCount = tasks.filter(item => item.done === true);
  
  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(prevState => [...prevState, newTask])
  }
  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({...task}));
    const foundItem = updatedTasks.find(item => item.id === id);
    if(!foundItem){
      return;
    }
    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  }
  function handleRemoveTask(id: number) {
    const updatedTask = tasks.filter(task => task.id !== id);
    setTasks(updatedTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} tasksDone={textDoneCount.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}
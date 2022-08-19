import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './style';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if(!task){ return;}
    addTask(task);
    setTask('');
  }

  return (
    <View style={styles.input}>
      <TextInput 
        style={styles.textInput} 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity style={styles.buttonInput} onPress={handleAddNewTask}>
        <FontAwesome5 name="plus-square" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}
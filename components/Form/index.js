import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import color from '../../contains/color';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Form(props) {
  const [task, setTask] = useState({ content: '', completed: false });

  const handleAddTask = () => {
    if (task.content.trim().replace(/\s+/g, ' ').length === 0) {
      Alert.alert(
        "Warning!!!",
        "A task contains at least one word and cannot be empty!",
        [
          {
            text: "OK", onPress: () => {},
          },
          { text: "Cancel", onPress: () => {} }
        ]
      );
      return false;
    }
    props.setTasks([...props.tasks, { content: task.content.trim().replace(/\s+/g, ' '), completed: false }]);
    setTask({ content: '', completed: false });
    Keyboard.dismiss();
  }

  const handleDeleteCompletedTask = () => {
    Alert.alert(
      "Delete completed tasks!!!",
      "Are you sure to delete all completed tasks? This action cannot be undone!",
      [
        {
          text: "Delete",
          onPress: () => {
            let taskListTemp = [...props.tasks];
            let remainingTasks = taskListTemp.filter((task, index) => !props.completedTasks.includes(index));
            props.setTasks(remainingTasks);
            props.completedTasks.splice(0, props.completedTasks.length);
          },
        },
        { text: "Cancel", onPress: () => {} }
      ]
    );
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding': 'height'}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput
        value={task.content} 
        style={styles.input}
        selectionColor="black"
        placeholder='Add task...'
        onChangeText={text => setTask({content: text})}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={handleAddTask}>
        <Icon name="circle-plus" size={40} color={color.primary} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={handleDeleteCompletedTask}>
        <Icon name="circle-minus" size={40} color={color.delete} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
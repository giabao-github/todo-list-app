import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.components.style';

export default function todoList() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  const handleAddTask = (task) => {
    task = task.trim().replace(/\s+/g, ' ');
    setTaskList([...taskList, task]);
  }

  const handleSave = (index, newTitle) => {
    newTitle = newTitle.trim().replace(/\s+/g, ' ');
    if (newTitle.length === 0) {
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
      setIsValidInput(false);
      return false;
    }
    else {
      let taskListTemp = [...taskList];
      taskListTemp[index] = newTitle;
      setTaskList(taskListTemp);
      setIsValidInput(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>TODO LIST</Text>
        <ScrollView style={styles.items} keyboardShouldPersistTaps='always'>
          {
            taskList.map((item, index) => {
              return (
                <Task key={index} number={index+1} task={item} tasks={taskList} setTasks={setTaskList} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} handleSave={handleSave} index={index} isValidInput={isValidInput} />
              );
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
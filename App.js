import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.components.style';

export default function todoList() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);
  const completedTasks = [];

  const handleAddTask = (task) => {
    task = task.trim().replace(/\s+/g, ' ');
    setTaskList([...taskList, task]);
  }

  const handleSave = (index, newTitle) => {
    newTitle = newTitle.trim().replace(/\s+/g, ' ');
    if (newTitle.length === 0) {
      return false;
    }
    else {
      let taskListTemp = [...taskList];
      taskListTemp[index] = newTitle;
      setTaskList(taskListTemp);
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
                <Task key={index} number={index+1} task={item} tasks={taskList} setTasks={setTaskList} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} handleSave={handleSave} index={index} setIsFormVisible={setIsFormVisible} completedTasks={completedTasks} />
              );
            })
          }
        </ScrollView>
      </View>
      {isFormVisible && <Form onAddTask={handleAddTask} completedTasks={completedTasks} />}
    </View>
  );
}
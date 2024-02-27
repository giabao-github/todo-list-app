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
    setTaskList([...taskList, task.trim().replace(/\s+/g, ' ')]);
  }

  const handleSave = (index, newTitle) => {
    let newTitleTrim = newTitle.trim().replace(/\s+/g, ' ');
    if (newTitleTrim.length === 0) {
      return false;
    }
    else {
      let taskListTemp = [...taskList];
      taskListTemp[index] = newTitleTrim;
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
      {isFormVisible && <Form onAddTask={handleAddTask} tasks={taskList} setTasks={setTaskList} completedTasks={completedTasks} />}
    </View>
  );
}
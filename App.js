import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.components.style';

export default function todoList() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleSave = (index, newTitle) => {
    const newTitleTrim = newTitle.trim().replace(/\s+/g, ' ');
    if (newTitleTrim.length === 0) {
      return false;
    }
    setTaskList(prev => prev.map((task, i) => i === index ? {...task, content: newTitleTrim, completed: false} : task));
    // else {
    //   let taskListTemp = [...taskList];
    //   taskListTemp[index].content = newTitleTrim;
    //   taskListTemp[index].completed = false;
    //   setTaskList(taskListTemp);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>TODO LIST</Text>
        <ScrollView style={styles.items} keyboardShouldPersistTaps='always'>
          {
            taskList.map((item, index) => {
              return (
                <Task key={index} index={index} number={index+1} taskContent={item.content} taskStatus={item.completed} tasks={taskList} setTasks={setTaskList} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} handleSave={handleSave} setIsFormVisible={setIsFormVisible} completedTasks={completedTasks} />
              );
            })
          }
        </ScrollView>
      </View>
      {isFormVisible && <Form tasks={taskList} setTasks={setTaskList} completedTasks={completedTasks} />}
    </View>
  );
}
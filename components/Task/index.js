import { React, useState, useRef } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, Modal, Button, View, I18nManager, Animated, Keyboard } from 'react-native';
import styles from './style';
import color from '../../contains/color';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { RectButton, Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

const Task = (props) => {
  const [importantTask, setImportantTask] = useState(false);
  const [completedTask, setCompletedTask] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const { number } = props;
  const numberString = number < 10 ? `0${number}` : number;
  const taskBackground = importantTask ? styles.important : styles.normal;
  const taskCompleted = completedTask ? styles.completedTask : '';
  const swipeableRef = useRef(null);

  const handleTaskPress = () => {
    setImportantTask(!importantTask);
  };

  const handleCompletedTask = (id) => {
    setCompletedTask(!completedTask);
    if (!completedTask) {
      props.completedTasks?.push(id);
    } else {
      let index = props.completedTasks?.indexOf(id); 
      props.completedTasks?.splice(index, 1);
    }
    console.log(`${completedTask}, ${props.completedTasks.length}`);
    console.log(props.completedTasks.toString());
  };

  const handleEdit = () => {
    props.setNewTaskTitle(props.task);
    setIsEditModalVisible(true);
    props.setIsFormVisible(false);
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  };

  const handleSave = () => {
    props.handleSave(props.index, newTaskTitle);
    if (newTaskTitle.trim().replace(/\s+/g, ' ').length === 0) {
      setIsEditModalVisible(true);
      setShowWarning(true); 
      props.setIsFormVisible(false);
    }
    else {
      setIsEditModalVisible(false);
      setShowWarning(false);
      props.setIsFormVisible(true);
    }
  };

  const handleDelete = (index) => {
    Alert.alert(
      "Delete task!!!",
      "Are you sure to delete this task? This action cannot be undone!",
      [
        {
          text: "Delete",
          onPress: () => {
            let taskListTemp = [...props.tasks];
            taskListTemp.splice(index, 1);
            props.setTasks(taskListTemp);
          },
        },
        { text: "Cancel", onPress: () => {} }
      ]
    );
  };

  renderLeftActions = (progress, dragX) => {};

  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
        >
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  let editButton = <Icon name="pen" size={20} color={color.white} />;
  let deleteButton = <Icon name="trash" size={20} color={color.white} />
  renderRightActions = progress => (
    <View style={{ width: 136, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
      <TouchableOpacity onPress={handleEdit}>
        {this.renderRightAction(editButton, '#ffab00', 256, progress)}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        {this.renderRightAction(deleteButton, '#dd2c00', 128, progress)}
      </TouchableOpacity>
    </View>
  );

  const Item = ({ number, task }) => (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.item}
    >
      <TouchableOpacity 
        activeOpacity={1}
        style={[styles.square, taskBackground]} 
        onPress={handleTaskPress}
      >
        <Text style={styles.number}>{number}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.task}
        onPress={handleCompletedTask}
      >
        <Text style={[styles.task, taskCompleted]}>{task}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable 
        renderRightActions={this.renderRightActions} 
        renderLeftActions={this.renderLeftActions}
        ref={swipeableRef}
        friction={3}
        overswipeLeftThreshold={30}
        overswipeRightThreshold={30}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={isEditModalVisible}
          renderLeftActions={this.renderLeftActions}
          renderRightActions={this.renderRightActions}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Edit Task</Text>
              <TextInput
                style={styles.modalTextInput}
                selectionColor="black"
                placeholder='Edit your task...'
                onChangeText={(text) => {
                  setNewTaskTitle(text);
                  setShowWarning(false);
                }}
                value={newTaskTitle}
              />
              {showWarning && <Text style={styles.warningText}>A task cannot be empty!</Text>}
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.modalButton, { marginRight: 20, backgroundColor: color.primary }]} 
                  onPress={handleSave}
                >
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  activeOpacity={0.7}
                  style={[styles.modalButton, { marginLeft: 20, backgroundColor: color.delete }]} 
                  onPress={() => {
                    setIsEditModalVisible(false);
                    props.setIsFormVisible(true);
                  }}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Item number={numberString} task={props.task} />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default Task;
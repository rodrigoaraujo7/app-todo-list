import { useState } from 'react'

import { 
  Keyboard,
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';

import Task from './src/components/Tasks';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss(); // remove the keyboard from the screen
    setTaskItems([...taskItems, task]); // add a new item task
    setTask(null) // remove the input value
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.secondTitle}>Today's tasks</Text>
        <View style={styles.item}>
          {/* This is where the tasks will go! */}
          {taskItems.map((item, index) => {
            return <Task key={index} text={item} />
          })}
        </View>
      </View>

      {/* Write a new task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  secondTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 35,
    paddingTop: 35,
    bottom: 0,
    width: '100%',

    backgroundColor: '#E8EAED95'
  },
  input: {
    backgroundColor: '#fff',
    
    paddingVertical: 15,
    paddingHorizontal: 15,
    padding: 50,
    width: 250,

    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 60,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  addWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

    width: 60,
    height: 60,
    
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 60,
  },
  addText: {},
});

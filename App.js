import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import backgroundStyles from './styles/backgroundStyles';
import AddTodoBar from './components/addTodoBar';
import Task from './components/task';
import BottonBar from './components/bottonBar';

// Mam tutaj tylko jeszcze jeden problem z stylami addTodoBar nie wiem jak dopasowac
// caly element view aby mial 100% pokrycie w view podstawowym.

export default function App() {

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = (text) => {
    if (text) {
      setTaskItems([...taskItems, text]);
    }
  };

  const handleClearTasks = () => {
    setTaskItems([]);
  };

  return (

    <SafeAreaView style={backgroundStyles.container}>
      <View style={backgroundStyles.mainContainer}>
        <Text style={backgroundStyles.appTitle}>Todo App</Text>
        <AddTodoBar onAddTask={handleAddTask} />
        <View style={backgroundStyles.flatList} >
          {
            taskItems.map((item, index) => {
              return (
                <Task key={index} text={item} />
              )
            })
          }
        </View>
        <View>
          <BottonBar
            taskCount={taskItems.length}
            onClearTasks={handleClearTasks}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
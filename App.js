import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import backgroundStyles from './styles/backgroundStyles';
import appTitleStyle from './styles/appTitleStyle';
import AddTodoBar from './components/addTodoBar';
import Task from './components/task';
import BottonBar from './components/bottonBar';


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
      {/* Main View */}
      <View style={backgroundStyles.mainContainer}>
        {/* Main container */}
        <Text style={appTitleStyle.appTitle}>Todo App</Text>
        {/* App Title */}
        <AddTodoBar onAddTask={handleAddTask} />
        {/* Add todo Bar */}
        <View style={backgroundStyles.fatList} >
          {
            taskItems.map((item, index) => {
              return (
                <Task key={index} text={item} />
              )
            })
          }
        </View>
        <View>
          {/* Text: numbers of taks and clar all button */}
          <BottonBar
            taskCount={taskItems.length}
            onClearTasks={handleClearTasks}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

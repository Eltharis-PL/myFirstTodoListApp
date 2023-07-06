import { Text, View, SafeAreaView } from 'react-native';
import backgroundStyles from './styles/backgroundStyles';
import appTitleStyle from './styles/appTitleStyle';
import AddTodoBar from './components/addTodoBar';
import Task from './components/task';
import BottonBar from './components/bottonBar';


export default function App() {

  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
    { id: 5, title: 'Task 5' },
    { id: 6, title: 'Task 6' },
  ];

  return (

    <SafeAreaView style={backgroundStyles.container}>
      {/* Main View */}
      <View style={backgroundStyles.mainContainer}>
        {/* Main container */}
        <Text style={appTitleStyle.appTitle}>Todo App</Text>
        {/* App Title */}
        <AddTodoBar />
        {/* Add todo Bar */}
        <View style={backgroundStyles.fatList} >
          {tasks.map(task => (<Task key={task.id} item={task} />
          ))}
        </View>
        <View>
          {/* Text: numbers of taks and clar all button */}
          <BottonBar />
        </View>
      </View>
    </SafeAreaView>
  );
}

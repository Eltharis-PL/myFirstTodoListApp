import { Text, View } from 'react-native';
import backgroundStyles from './styles/backgroundStyles';
import appTitleStyle from './styles/appTitleStyle';
import AddTodoBar from './components/addTodoBar';


export default function App() {
  return (

    <View style={backgroundStyles.container}>
      {/* Main View */}
      <View style={backgroundStyles.mainContainer}>
        {/* Main container */}
        <Text style={appTitleStyle.appTitle}>Todo App</Text>
        {/* App Title */}
        <AddTodoBar />
        {/* Add to do Bar */}
        <View>
          {/* Todo list Task*/}
        </View>
        <View>
          {/* Text: numbers of taks and clar all button */}
        </View>
      </View>
    </View>
  );
}

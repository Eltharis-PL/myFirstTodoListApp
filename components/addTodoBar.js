import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import addTodoBarStyles from "../styles/addTodoBarStyles";



const AddTodoBar = ({ onAddTask }) => {


    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText) {
            onAddTask(taskText);
            setTaskText('');
        }
    };

    return (
        <View style={addTodoBarStyles.barContainer}>
            <View style={addTodoBarStyles.userInput}>
                <TextInput
                    style={addTodoBarStyles.inputText}
                    placeholder='Add your new todo'
                    value={taskText}
                    onChangeText={setTaskText}
                />
            </View>
            <TouchableOpacity onPress={handleAddTask}>
                <View style={addTodoBarStyles.addButton}>
                    <Text style={addTodoBarStyles.plusString}>+</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}


export default AddTodoBar;
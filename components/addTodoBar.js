import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import addTodoBarStyles from "../styles/addTodoBarStyles";



const AddTodoBar = () => {
    return (
        <View style={addTodoBarStyles.barContainer}>
            <View style={addTodoBarStyles.userInput}>
                <TextInput style={addTodoBarStyles.inputText} placeholder={'Add your new todo'} />
            </View>
            <TouchableOpacity onPress={() => { }}>
                <View style={addTodoBarStyles.addButton}>
                    <Text style={addTodoBarStyles.plusString}>+</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}


export default AddTodoBar;
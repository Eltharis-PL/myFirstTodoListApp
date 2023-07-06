import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import taskStyles from "../styles/taskStyles";


const Task = () => {
    return (
        <TouchableOpacity>
            <View style={taskStyles.mainTaskView}>
                <View style={taskStyles.taskOutpot}>
                    <Text>This is my new task</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default Task;
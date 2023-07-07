import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import taskStyles from "../styles/taskStyles";


const Task = ({ text }) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const handleToggleComplete = () => {
        setIsCompleted(!isCompleted);
    }

    return (
        <TouchableOpacity onPress={handleToggleComplete}>
            <View style={taskStyles.mainTaskView}>
                <View style={taskStyles.taskOutpot}>
                    <Text style={[isCompleted && taskStyles.completedTaskText]}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default Task;
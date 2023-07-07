import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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

const taskStyles = StyleSheet.create({
    mainTaskView: {
        paddingTop: 20,
        height: 40,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },
    taskOutpot: {
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        height: 40,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
    },
});
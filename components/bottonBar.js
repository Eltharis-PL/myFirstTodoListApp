import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottonBar = ({ taskCount, onClearTasks }) => {
    return (
        <View style={bottomBar.mainContainer}>
            <View>
                <Text style={bottomBar.textStyle}>
                    Complete tasks: {taskCount}
                </Text>
            </View>
            <TouchableOpacity onPress={onClearTasks} >
                <View style={bottomBar.clearAllButton}>
                    <Text style={bottomBar.textClearAll}>Clear All</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BottonBar

const bottomBar = StyleSheet.create({
    mainContainer: {
        width: 'auto',
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 15,
    },
    clearAllButton: {
        backgroundColor: '#814181',
        width: 80,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textClearAll: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
});


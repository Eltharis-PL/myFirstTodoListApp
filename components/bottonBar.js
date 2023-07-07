import React from "react";
import bottomBar from "../styles/bottomBarStyles";
import { View, Text, TouchableOpacity } from "react-native";


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

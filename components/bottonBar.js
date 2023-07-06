import React from "react";
import bottomBar from "../styles/bottomBarStyles";
import { View, Text, TouchableOpacity } from "react-native";


const BottonBar = () => {
    return (
        <View style={bottomBar.mainContainer}>
            <View>
                <Text style={bottomBar.textStyle}>You have 4 pending tasks</Text>
            </View>
            <TouchableOpacity>
                <View style={bottomBar.clearAllButton}>
                    <Text style={bottomBar.textClearAll}>Clear All</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default BottonBar

import { StyleSheet } from 'react-native';


const addTodoBarStyles = StyleSheet.create({
    barContainer: {
        paddingTop: 45,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInput: {
        borderColor: '#D8D8D8',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 253,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    inputText: {
        fontSize: 15,
    },
    addButton: {
        backgroundColor: '#814181',
        width: 50,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    plusString: {
        fontSize: 28,
        color: 'white',
    },
});


export default addTodoBarStyles;
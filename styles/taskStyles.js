import { StyleSheet } from 'react-native';


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


export default taskStyles;
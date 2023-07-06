import { StyleSheet } from 'react-native';


const bottomBar = StyleSheet.create({
    mainContainer: {
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

export default bottomBar;
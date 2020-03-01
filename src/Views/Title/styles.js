import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    upper: {
        flex: 1,
    },
    loginCard: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 48,
        paddingTop: 64,
        paddingBottom: 64,
        // flex: 2,
        justifyContent: 'flex-end',
    },
    button: {
        margin: 8,
        padding: 10
    },
    buttonInner: {
        margin: 8,
      
    },
    outlinedButton: {
        borderColor: '#fff',
        borderWidth: 1,
    },
});

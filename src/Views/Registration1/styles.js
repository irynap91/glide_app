import { StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    backgroud: {
        width: deviceWidth,
        height: deviceHeight,
        display: 'flex',
    },
    inputContainer: {
        width: deviceWidth <= 320 ? 255 : deviceWidth <= 375 ? 300 : 342,
        height: deviceWidth <= 320 ? 416 : deviceWidth <= 375 ? 450 : 540,
        paddingBottom: 31,
        paddingLeft: 21,
        paddingRight: 21,
        paddingTop: deviceWidth <= 375 ? 0 : 23,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 36,
        marginLeft: 36
    },
    backButton: {
        marginTop: deviceWidth <= 375 ? 10 : 30
    },
    buttonMain: {
        marginTop: deviceWidth <= 320 ? 10 : deviceWidth <= 375 ? 20 : 50
    },
    block: {
        height: deviceWidth <= 320 ? 0 : deviceWidth <= 375 ? 0 : 20
    }
});

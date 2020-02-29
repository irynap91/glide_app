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
        height: deviceWidth <= 320 ? 320 : deviceWidth <= 375 ? 370 : 430,
        paddingBottom: 31,
        paddingLeft: 21,
        paddingRight: 21,
        paddingTop: deviceWidth <= 375 ? 0 : 23,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5
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
    logo_box: {
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        width: deviceWidth <= 320 ? 165 : deviceWidth <= 375 ? 150 : 225,
        height: deviceWidth <= 320 ? 170 : deviceWidth <= 375 ? 180 : 270
    }
});
import { StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    backgroud: {
        width: deviceWidth,
        height: deviceHeight,
        display: 'flex',
    },
    screenTitle: {
        textAlign: 'left',
        color: 'white',
        fontSize: deviceWidth <= 375 ? 30 : 40,
        alignSelf: 'flex-start',
        // fontFamily: 'Roboto-Bold',
        fontWeight: '700',
        marginLeft: 36,
        marginBottom: deviceWidth <= 375 ? 5 : 15,
        marginTop: 0
    },
    inputContainer: {
        width: deviceWidth <= 320 ? 255 : deviceWidth <= 375 ? 300 : 342,
        height: deviceWidth <= 320 ? 245 : deviceWidth <= 375 ? 275 : 325,
        paddingBottom: 29,
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
    buttonRegister: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1.5,
        // marginTop: deviceWidth <= 375 ? 20 : 28,
        marginTop: deviceWidth <= 320 ? 20 : deviceWidth <= 375 ? 25 :28,
        padding: deviceWidth <= 375 ? 0 : 10,
        width: deviceWidth <= 320 ? 215 : deviceWidth <= 375 ? 260 : 300,
        height: deviceWidth <= 375 ? 40 : 60,
    },
    loginError: {
        // fontFamily: 'NotoSans',
        color: '#bd313a',
        fontWeight: '600',
        padding: 2,
        textAlign: 'center',
        width: '100%',
        marginTop: 8,
    },
    backButton: {
        marginTop: deviceWidth <= 375 ? 10 : 30
    },
    logo_box: {
        display: 'flex', 
        justifyContent: 'center',
        marginTop: deviceWidth <= 375 ? 10 : 36
    },
    logo: {
        height: deviceWidth <= 320 ? 60 : deviceWidth <= 375 ? 85 : 125, 
        width: deviceWidth <= 320 ? 50 : deviceWidth <= 375 ? 70 : 105, 
        alignSelf: 'center'
    },
    buttonMain: {
        marginTop: deviceWidth <= 320 ? 10 : deviceWidth <= 375 ? 25 : 30
    }
});

import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    block: {
        height: 100,
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
    },
    renderCities: {
        width: '81%',
        display: 'flex',
        justifyContent: 'center',
        marginRight: 40,
        marginLeft: deviceWidth <= 320 ? 30 : 40
    },
    city: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    city_text: {
        color: 'white',
        fontSize: 32,
        // fontFamily: 'Roboto-Bold',
        fontWeight: '700',
    },
    searchbar: {
        width: '90%',
      
    },
    country: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    country_text: {
        fontSize: 46,
        fontWeight: '700',
        color: 'white',
        // fontFamily: 'Roboto-Bold'
    },
    activities: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    activities_text: {
        color: '#FFFFFF',
        marginLeft: 5,
        fontSize: 10
    }
})
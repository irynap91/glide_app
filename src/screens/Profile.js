import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import ProfilePic from '../components/ProfilePic';
import DonutChart from '../components/DonutChart';
import ProfileStat from '../components/ProfileStat';

export default Registration2 = () => {
    return (
        <ImageBackground 
            source={require('../assets/BG_Profile.png')} 
            style={globalStyles.backgroud}>
            <View style={globalStyles.container}>
                <ProfilePic/>
                <Image 
                    style={styles.level} 
                    source={require('../assets/Level.png')}/>
                <DonutChart/>
                <ProfileStat/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    level: {
        marginTop: 15
    }
})
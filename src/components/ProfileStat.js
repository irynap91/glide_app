import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class ProfileStat extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.label}>Avg. Speed:</Text>
                <Text style={styles.index}>20 km/h</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.label}>Total Slopes:</Text>
                <Text style={styles.index}>16 SL</Text>
            </View>
            <View style={styles.blockLast}>
                <Text style={styles.label}>Total Distance:</Text>
                <Text style={styles.index}>256 km</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 41
    },
    block: {
        borderRightColor: '#E0E0E0',
        borderRightWidth: 1,
        padding: 19,
    },
    blockLast: {
        padding: 19
    },
    label: {
        fontSize: 14,
        color: '#555555',
        fontFamily: 'Roboto-Regular',
        fontWeight: '500'
    },
    index: {
        color: '#13A3EF',
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
        fontSize: 25
    }
});

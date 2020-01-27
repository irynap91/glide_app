import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedCircularProgress from 'react-native-conical-gradient-progress';

export default class DonutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fill: 80 };
  }
  render() {
    return (
        <View style={styles.chart}> 
          <AnimatedCircularProgress
            size={200}
            width={12}
            fill={this.state.fill}
            prefill={100}
            beginColor="#01D1FE"
            endColor="#3680D8"
            segments={10}
            backgroundColor="#555555"
            linecap="round"
          >
            {fill => (
              <View style={styles.titleBox}>
                <Text style={styles.percent}>90%</Text>
                <Text style={styles.title}>OVERALL STATS</Text>
              </View>
            )}
          </AnimatedCircularProgress>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBox: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    marginTop: 23
  },
  title: {
    fontSize: 15,
    color: '#3680D8',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: -10,
    fontFamily: 'Roboto-Regular'
  },
  percent: {
    fontSize: 80,
    color: '#13A3EF',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  }
});
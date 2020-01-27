import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ButtonMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={this.props.onPress}
          >
          <LinearGradient 
              colors={['#01D1FE', '#3680D8']} 
              start={{x: -0.3479, y: 0}} end={{x: 1, y: 0}} 
              style={styles.gradient}>
            <Text style={styles.text}>{this.props.title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 40,
    marginBottom: 20
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5
  },
  button: {
    width: '100%',
    height: 45,
   
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

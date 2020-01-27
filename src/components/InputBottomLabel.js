import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class InputBottomLabel extends Component {
  render() {
    return (
       <View>
            <Text style={styles.text}>Already have an account? 
                <Text 
                    style={styles.link} 
                    onPress={this.props.onPress}
                    > Sign In</Text>
            </Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        margin: 10,
        color: '#13A3EF',
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#13A3EF'
    }, 
    link: {
        fontWeight: '700',
        fontStyle: 'italic',
    }
});

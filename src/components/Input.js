import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


export default class Input extends Component {
  render() {
    return (
        <View style={styles.input}>
            {this.props.label && <Text style={styles.inputLabel}>{this.props.label}</Text>}
            <TextInput 
                placeholder={this.props.placeholder} 
                style={styles.inputField}
                onChangeText={this.props.onChangeText}
                />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    inputLabel: {
        fontFamily: 'NotoSans',
        color: '#13A3EF',
        fontWeight: '600',
        padding: 2,
    },
    inputField: {
        borderWidth: 0.5,
        borderColor: '#BDBDBD',
        borderRadius: 5,
        padding: 13,
        position: 'relative',
        width: '100%'
    },
    input: {
        marginTop: 23
    }
});

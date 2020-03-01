import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


export default class Input extends Component {
  render() {
      const {error} = this.props;
    return (
        <View style={styles.input}>
            {this.props.label && <Text style={[styles.inputLabel, error && styles.labelError]}>{this.props.label}</Text>}
            <TextInput
                placeholder={this.props.placeholder}
                style={[styles.inputField, error && styles.fieldError]}
                onChangeText={this.props.onChangeText}
                textContentType={this.props.textContentType || 'none'}
                autoCompleteType={this.props.autoCompleteType || 'off'}
                secureTextEntry={this.props.secureTextEntry || false}
                />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    inputLabel: {
        // fontFamily: 'NotoSans',
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
        width: '100%',
    },
    input: {
        marginTop: 23,
    },
    fieldError: {
        borderWidth: 0.75,
        borderColor: '#bd313a',
    },
    labelError: {
        color: '#bd313a',
    },
});

import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const Registration2 = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is create account step 2!
            </Text>
            <View  style={styles.inputContainer}>
                <View>
                    <Text>Email Address</Text>
                    <TextInput placeholder='Enter email address' style={styles.input}/>
                    <TextInput placeholder='Re-type email address' style={styles.input}/>
                </View>
                <View>
                    <Text>Mobile Number</Text>
                    <TextInput placeholder='Enter mobile number' style={styles.input}/>
                </View>
                <View style={styles.button}>
                    <Button title='Create an Account'/>
                </View>
                <Text>Already have an account? </Text><Button title='Sign In'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
		alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
    },
    button: {
        backgroundColor: 'red',
      
    }

})

export default Registration2;
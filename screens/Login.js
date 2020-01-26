import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is Login sreen!
            </Text>
            <Text>Log in to your account</Text>
            <View  style={styles.inputContainer}>
                <View>
                    <Text>Username</Text>
                    <TextInput placeholder='Enter username' style={styles.input}/>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput placeholder='Enter password' style={styles.input}/>
                </View>
                <View style={styles.button}>
                    <Button title='Sign In'/>
                </View>
                <View style={styles.button}>
                    <Button title='Create an Account'/>
                </View>
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

export default Login;
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';

const Registration1 = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is create account step 1!
            </Text>
            <Image 
                 style={{width: 70, height: 70}}
                source={{url: 'https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg'}}
                />
           <Image 
                style={{width: 20, height: 20}}
                source={{url: 'https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg'}}
                />
            <View  style={styles.inputContainer}>
                <View>
                    <Text>Full name </Text>
                    <TextInput placeholder='Enter full name' style={styles.input}/>
                </View>
                <View>
                    <Text>Username</Text>
                    <TextInput placeholder='Enter username' style={styles.input}/>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput placeholder='Enter password' style={styles.input}/>
                    <TextInput placeholder='Re-type password ' style={styles.input}/>
                </View>

                <View style={styles.button}>
                    <Button title='Next step'/>
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

export default Registration1;
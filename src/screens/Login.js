import React from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import ButtonMain from '../components/ButtonMain';
import Input from '../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {
  
    render () {
        const {navigate} = this.props.navigation;
    return (
            <ImageBackground 
                source={require('../../assets/BG.png')} 
                style={globalStyles.backgroud}>
            <View style={globalStyles.container}>
            <Image 
                source={require('../../assets/Logo_signin.png')} 
                style={styles.backgroudImage} />
            <Text style={styles.screenTitle}>Log in to {"\n"}your account</Text>
            
            <View  style={globalStyles.inputContainer}>
                <Input
                    label={'Username'}
                    placeholder={'Enter username'}
                    />
                <Input
                    label={'Password'}
                    placeholder={'Enter password'}
                    />
                <ButtonMain 
                    title={'Sign In'}
                    onPress={() => navigate('Profile')}
                />
            </View>
            <View style={styles.buttonRegister}>
                <TouchableOpacity onPress={() => navigate('Registration1')}>
                    <Button
                        color={'white'}
                        title={'Create an Account'}
                        />
                </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
    )
}}

const styles = StyleSheet.create({
  
    backgroudImage: {
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenTitle: {
        textAlign: 'left',
        color: 'white',
        fontSize: 40,
        fontFamily: 'Roboto-Bold',
        marginBottom: 15,
        marginTop: 30
    },
    buttonRegister: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1.5,
        marginTop: 28
    }

})

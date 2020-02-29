import React, {useState, useContext} from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import { globalStyles } from '../../Components/Styles/globalStyles';
import {Button} from 'react-native-paper';
import ButtonMain from '../../Components/ButtonMain/ButtonMain';
import BackButton from '../../Components/BackButton';
import Input from '../../Components/Input';
import {PageContext} from '../../Modules/Router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Auth} from 'aws-amplify';
import ConfirmationDialog from '../../Components/ConfirmationDialog';
import {styles} from './styles'

export default props => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [isWaiting, awaitingConfirmation] = React.useState(false);


// export default Login = () => {
    
    const {pageContext, dispatch} = React.useContext(PageContext);
    const updatePage = page => dispatch({page});

    const signIn = event => {
        awaitingConfirmation(false);
        setLoading(true);
        Auth.signIn(username.toLowerCase(), password).then(resp => {
            console.log(resp);
            props.onAuthed(true);
            updatePage('Profile');
        }).catch(e => {
            console.log(e);
            if (e.code === 'UserNotConfirmedException') {
                // User has not confirmed account
                console.error('User not verified');
                awaitingConfirmation(true);
            } else {
                setError(true);
            }
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
            <ImageBackground
                source={require('../../Assets/BG.png')}
                style={styles.backgroud}>
            <View style={styles.backButton}>
                <BackButton 
                    title={'Back'} 
                    color={'white'}
                    onPress={()=> updatePage('Title')}
                    />  
            </View>

            <View style={styles.logo_box}>
                <Image source={require('../../Assets/Logo_login.png')} style={styles.logo}/>
            </View>

            
            <View style={globalStyles.container}>
                <Text style={styles.screenTitle}>
                    Log in to {"\n"}your account
                </Text> 
            <View  style={styles.inputContainer}>
                <Input
                    value={username}
                    label={'Username'}
                    placeholder={'Enter username'}
                    onChangeText={setUsername}
                    textContextType={'username'}
                    autoCompleteType={'username'}
                    error={error}
                    />
                <Input
                    value={password}
                    label={'Password'}
                    placeholder={'Enter password'}
                    textContextType={'password'}
                    onChangeText={setPassword}
                    autoCompleteType={'password'}
                    secureTextEntry
                    error={error}
                    />
                <View style={styles.buttonMain}> 
                    <ButtonMain
                        title={'Sign In'}
                        onPress={()=>updatePage('Profile')}
                        //onPress={signIn}
                        //disabled={loading}
                    />
                </View>
                {/* {error &&
                    <Text style={styles.loginError}>Incorrect username or password</Text>
                } */}
            </View>
            <View>
                <TouchableOpacity 
                    onPress={() => {updatePage('Registration1')}}>
                    <Button 
                        color={'white'}
                        style={styles.buttonRegister}
                        >Create an Account</Button>
                </TouchableOpacity>
            </View>
            </View>
                 {isWaiting && <ConfirmationDialog username={username} onVerify={signIn} />}
        </ImageBackground>
    )
}


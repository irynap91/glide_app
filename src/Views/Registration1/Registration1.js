import React, { useState, useContext } from 'react';
import { View, ImageBackground, Dimensions} from 'react-native';

import ButtonMain from '../../Components/ButtonMain/ButtonMain';
import Input from '../../Components/Input';
import InpuBottomLabel from '../../Components/InputBottomLabel';
import AddProfilePic from '../../Components/AddProfilePic/AddProfilePic';
import {PageContext} from '../../Modules/Router';
import {styles} from './styles'

export default function Registration1 ({navigation}) {

        const [name, setName] = useState('');
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [repeatPassword, setRepeatPassword] = React.useState('');

        const {pageContext, dispatch} = React.useContext(PageContext);
        const updatePage = page => dispatch({page, props: {username: userName, password, name}});

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
        <View style={styles.container}>
            <AddProfilePic/>
            <View  style={styles.inputContainer}>
                <Input
                    label={'Full name'}
                    placeholder={'Enter full name'}
                    onChangeText={setName}
                    value = {name}
                    />
                <Input
                    label={'Username'}
                    placeholder={'Enter username'}
                    onChangeText={setUserName}
                    value = {userName}
                    />

                <View style={styles.block}></View>

                <Input
                    label={'Password'}
                    placeholder={'Enter password'}
                    onChangeText={setPassword}
                    value = {password}
                    secureTextEntry
                    />
                <Input
                    label={null}
                    placeholder={'Re-type password'}
                    onChangeText ={setRepeatPassword}
                    value = {repeatPassword}
                    secureTextEntry
                    />
                <View style={styles.buttonMain}>
                    <ButtonMain
                        title={'Next step'}
                        onPress={()=> updatePage('Registration2')}
                        />
                </View>
                <InpuBottomLabel
                    onPress={() => updatePage('Login')}
                    />
            </View>
        </View>
    </ImageBackground>
    )
}

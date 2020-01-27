import React, { useState } from 'react';
import { View, ImageBackground} from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import ButtonMain from '../components/ButtonMain';
import Input from '../components/Input';
import InpuBottomLabel from '../components/InputBottomLabel';
import AddProfilePic from '../components/AddProfilePic';


export default function Registration1 ({navigation}) {

        const [name, setName] = useState('');
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [repeatPassword, setRepeatPassword] = React.useState('');

    return (
        <ImageBackground 
            source={require('../assets/BG.png')} 
            style={globalStyles.backgroud}>
        <View style={globalStyles.container}>
            <AddProfilePic/>
            <View  style={globalStyles.inputContainer}>
                <Input
                    label={'Full name'}
                    placeholder={'Enter full name'}
                    onChangeText={(val) => {setName(val)}}
                    value = {name}
                    />
                <Input
                    label={'Username'}
                    placeholder={'Enter username'}
                    onChangeText={(val) => {setUserName(val)}}
                    value = {userName}
                    />
                <Input
                    label={'Password'}
                    placeholder={'Enter password'}
                    onChangeText={(val) => {setPassword(val)}}
                    value = {password}
                    />
                <Input
                    label={null}
                    placeholder={'Re-type password'}
                    onChangeText ={(val) => setRepeatPassword(val)}
                    value = {repeatPassword}
                    />
                <ButtonMain 
                    title={'Next step'}
                    onPress={()=>{navigation.navigate('Registration2')}}
                    />
                <InpuBottomLabel
                    onPress={() => navigation.navigate('Login')}
                    />
            </View>
        </View>
        </ImageBackground>
    )
}
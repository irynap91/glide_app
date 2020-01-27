import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import ButtonMain from '../components/ButtonMain';
import Input from '../components/Input';
import InpuBottomLabel from '../components/InputBottomLabel';

export default function Registration2 ({navigation}) {
    const [email, setEmail] = useState('');
    const [repeatEmail, setRepeatEmail] = useState('');
    const [phone, setPhone] = useState('');
    

    return (
        <ImageBackground 
            source={require('../assets/BG.png')} 
            style={globalStyles.backgroud}>
        <View style={globalStyles.container}>
            <Image 
                source={require('../assets/Logo_createAccount.png')} 
                style={styles.backgroudImage} />
            
            <View  style={globalStyles.inputContainer}>
                <Input
                    label={'Email Address'}
                    placeholder={'Enter email address'}
                    onChangeText={(val) => {setEmail(val)}}
                    value = {email}
                    />
                <Input
                    label={null}
                    placeholder={'Re-type email address'}
                    onChangeText={(val) => {setRepeatEmail(val)}}
                    value = {repeatEmail}
                    />
                 <Input
                    label={'Mobile Number'}
                    placeholder={'Enter mobile number'}
                    onChangeText={(val) => {setPhone(val)}}
                    value = {phone}
                    />
                <ButtonMain
                    title={'Create an Account'}
                    onPress={() => navigation.navigate('Profile')}
                    />
                <InpuBottomLabel
                    onPress={() => navigation.navigate('Login')}
                    />
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
   backgroudImage: {
       marginBottom: 27
   }

})

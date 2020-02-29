import React, {useState} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {globalStyles} from '../../Components/Styles/globalStyles';
import ButtonMain from '../../Components/ButtonMain/ButtonMain';
import Input from '../../Components/Input';
import InpuBottomLabel from '../../Components/InputBottomLabel';
import {PageContext} from '../../Modules/Router';
import ConfirmationDialog from '../../Components/ConfirmationDialog';
import {Auth} from 'aws-amplify';
import {styles} from './styles';

export default function Registration2(props) {
    const [email, setEmail] = useState('');
    const [repeatEmail, setRepeatEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isWaiting, awaitingConfirmation] = React.useState(false);

    const {pageContext, dispatch} = React.useContext(PageContext);
    const updatePage = page => dispatch({page});

    // const signUp = () => {
    //     Auth.signUp({
    //         username: props.username.toLowerCase(),
    //         password: props.password,
    //         attributes: {
    //             email,
    //             phone_number: phone,
    //             name: props.name,
    //             nickname: props.username,
    //         },
    //     })
    //         .then(res => {
    //             console.log(res);
    //             awaitingConfirmation(true);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    // const verifyAccount = () => {
    //     awaitingConfirmation(false);
    //     Auth.signIn(props.username.toLowerCase(), props.password)
    //         .then(resp => {
    //             updatePage('Profile');
    //         })
    //         .catch(e => {
    //             if (e.code === 'UserNotConfirmedException') {
    //                 // User has not confirmed account
    //                 console.error('User not verified');
    //                 awaitingConfirmation(true);
    //             }
    //         });
    // };

    return (
        <ImageBackground
            source={require('../../Assets/BG.png')}
            style={styles.backgroud}>
        <View style={styles.backButton}>
            <BackButton 
                title={'Back'} 
                color={'white'}
                onPress={()=> updatePage('Registration1')}
                />
        </View>
        <View style={styles.logo_box}>
            <Image 
                source={require('../../Assets/Logo_registration.png')} 
                style={styles.logo}/>
        </View>

            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <Input
                        label={'Email Address'}
                        placeholder={'Enter email address'}
                        onChangeText={val => {
                            setEmail(val);
                        }}
                        value={email}
                    />
                    <Input
                        label={null}
                        placeholder={'Re-type email address'}
                        onChangeText={val => {
                            setRepeatEmail(val);
                        }}
                        value={repeatEmail}
                    />
                    <Input
                        label={'Mobile Number'}
                        placeholder={'Enter mobile number'}
                        onChangeText={val => {
                            setPhone(val);
                        }}
                        value={phone}
                    />
                    <View style={styles.buttonMain}>
                    <ButtonMain 
                        title={'Create an Account'} 
                        // onPress={signUp}
                        onPress={() => updatePage('Login')} 
                        />
                    </View>
                    <InpuBottomLabel onPress={() => updatePage('Login')} />
                </View>
            </View>
            {/* {isWaiting && (
                <ConfirmationDialog
                    username={props.username}
                    onVerify={verifyAccount}
                />
            )} */}
        </ImageBackground>
    );
}

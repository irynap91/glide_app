import React, { useState, useContext } from 'react';
import {View, Text, ImageBackground, Image, TouchableHighlight} from 'react-native';
import styles from './style';
import {Card, Button} from 'react-native-paper';
import {PageContext} from '../../Modules/Router';
import BackgroundSlider from '../../Components/BackgroundSlider';

export default props => {
    const {pageContext, dispatch} = React.useContext(PageContext);
    const updatePage = page => dispatch({page})

    return (
        <View style={styles.root}>
            <BackgroundSlider/>
            <View style={styles.upper} />
            <Card elevation={0} style={styles.loginCard}>
                <Button
                    color={'#ffffff'}
                    style={styles.button}
                    mode={'contained'}
                    onPress={()=>updatePage('Login')}>
                    <Text style={styles.buttonInner}>
                        Sign In
                    </Text>
                </Button>
                <Button
                    color={'#ffffff'}
                    style={[styles.button, styles.outlinedButton]}
                    mode={'outlined'}
                    onPress={()=>updatePage('Registration1')}
                    >
                    <Text style={styles.buttonInner}>
                        Create an Account
                    </Text>
                </Button>
            </Card>
        </View>
    );
};

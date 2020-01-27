import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class ProfilePic extends Component {
  render() {
    return (
      <View style={styles.profile}>
          <Image 
                source={require('../../assets/Profile.png')} 
                style={styles.picture}/>
            <Text style={styles.name}>Gleb Slavinskiy</Text>
            <Text style={styles.email}>slavinskiyg@icloud.com </Text>
            <Text style={styles.phone}>+44 7723 765476</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    picture: {
        borderRadius: 100
    },
    profile: {
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    name: {
      margin: 2.5,
      color: 'white',
      fontSize: 26,
      fontWeight: '600',
      fontFamily: 'NotoSans' 
    },
    email: {
      margin: 2.5,  
      color: 'white',
      fontSize: 15,
      fontWeight: '500',
      fontFamily: 'NotoSans'
    },
    phone: {
      margin: 2.5,  
      color: 'white',
      fontSize: 15,
      fontWeight: '600',
      fontFamily: 'NotoSans'
    }

});

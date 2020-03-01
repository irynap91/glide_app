import React, {useContext} from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, Dimensions, Image } from 'react-native';
import { globalStyles } from '../../Components/Styles/globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileDetails from '../../Components/ProfileDetails';
import ProfilePageTitle from '../../Components/ProfilePageTitle';
import ProfilePic from '../../Components/ProfilePic';
import TabNavigation from '../../Components/TabNavigation';
import {PageContext} from '../../Modules/Router';
import ChangePassword from '../../Views/ChangePassword/ChangePassword'


export default Settings = () => {

    const {pageContext, dispatch} = React.useContext(PageContext);
    const updatePage = page => dispatch({page});

    const deviceWidth = Dimensions.get('window').width;

    return (
            <ImageBackground 
                source={require('../../Assets/BG_Settings.jpg')} 
                style={globalStyles.backgroud}>
                <View style={{marginTop: deviceWidth <= 375 ? 0 : 20}}>
                    <BackButton
                    title={'Profile'}
                    color={'white'}
                    onPress={()=>updatePage('Profile')}
                    />
                </View>
            <View style={globalStyles.container}>
                <View style={styles.profilePic}>
                <ProfilePic source={require('../../Assets/Profile_Piture_Temp.png')}/>
                {/* {profilePic} ? <Avatar.Image size={84} source={require(profilePic)} /> : <Avatar.Text size={84} label={fullName.split('')[0]} /> */}
                </View>
                <Text style={styles.fullName}>Gleb Slavinskiy</Text> 
                <View  style={{...styles.profilePageTitle, marginTop: deviceWidth <= 320 ? 0 : 30 }}>
                    <ProfilePageTitle title={'SETTINGS'}/>
                </View>
            </View>

            {/* <View style={{...styles.line, 
                marginTop: deviceWidth <= 375 ?  0 : 30}}>
            </View> */}

            <View style={{marginBottom: deviceWidth <= 320 ? 0 : deviceWidth <= 375 ? 50 : 120}}>
                <TouchableOpacity onPress={()=>updatePage('EditProfile')}>
                    <ProfileDetails
                        iconName={'PROFILE'}
                        title={'Profile details'}
                        icon={'user-circle'}
                        />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ProfileDetails
                        iconName={'BANK DETAIL'}
                        title={'Payment details'}
                        icon={'credit-card'}
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>updatePage('ChangePassword')}>
                    <ProfileDetails
                        iconName={'SECURITY'}
                        title={'Change password'}
                        icon={'lock'}
                        />
                </TouchableOpacity>
            </View>
            <TabNavigation tab={'Profile'}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  line: {
      borderBottomColor: '#E0E0E0',
  },
  fullName: {
      fontSize: 26,
    //   fontFamily: 'Noto Sans',
      color: '#555555', 
      fontWeight: '600',
      marginTop: 13
  },
  profilePic: {
      paddingTop: 55
  },
  profilePageTitle: {
      marginTop: 30,
      marginBottom: 18
  }

})

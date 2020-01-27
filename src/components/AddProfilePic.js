import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class AddProfilePic extends Component {
    constructor(props) {
        super(props)
        this.state= {
            filePath: null,
        }
    }

    chooseFile = () => {
        var options = {
          title: 'Select Image',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
     
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = response;
            this.setState({
              filePath: source,
            });
          }
        });
      };

  render() {
    
    return (
      <View style={styles.addProfilePic}>
           <Image 
                source={this.state.filePath == null ? require('../assets/Profile.png') : this.state.filePath} 
                style={styles.profile} />
            <TouchableOpacity onPress={this.chooseFile}>        
                <Image 
                source={require('../assets/Camera.png')} 
                style={styles.addPic} 
                />
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    profile: {
        borderRadius: 100
    },
    addPic: {
        borderRadius: 100,
        position: 'absolute',
        bottom: 25,
        right: 0
    },
    addProfilePic: {
      marginBottom: 21
    }
});

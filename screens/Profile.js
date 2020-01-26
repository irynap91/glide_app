import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Registration2 = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Exit</Text>
                <Text>Menu</Text>
            </View>
            <Text>
                This is profile screen!
            </Text>
            <View>
                <Image 
                    style={{width: 70, height: 70}}
                    source={{url: 'https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg'}}
                    />
                <Text>Gleb Slavinskiy</Text>
                <Text>slavinskiyg@icloud.com </Text>
                <Text>+44 7723 765476</Text>
            </View>
            <View><Text>Pro Level</Text></View>
            <View  style={styles.inputContainer}>
                {/* Round with stats */}
                <View>
                    <View>
                        <Text>Avg. Speed:</Text>
                        <Text>20 km/h</Text>
                    </View>
                    <View>
                        <Text>Total Slopes:</Text>
                        <Text>16 SL</Text>
                    </View>
                    <View>
                        <Text>Total Distance:</Text>
                        <Text>256 km</Text>
                    </View>
                </View>
                {/* Bottom Navigation */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
		alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: 'white',
    },
    // input: {
    //     borderWidth: 1,
    //     borderColor: 'grey',
    // },
    // button: {
    //     backgroundColor: 'red',
      
    // }

})

export default Registration2;
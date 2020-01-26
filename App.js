import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Registration2 from './screens/Registration2';
import Registration1 from './screens/Registration1';
import Login from './screens/Login';
import Profile from './screens/Profile';
// import Navigator from './routes/SignInStack';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.instructions}>Hello World!</Text>
    <View>
      {/* <Registration2/> */}
      {/* <Registration1/> */}
      {/* <Login/> */}
      <Profile/>
      
      {/* <Navigator/> */}
    </View>
  </View> 
  );
};

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	} 
});

export default App;

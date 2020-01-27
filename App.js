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

import Registration2 from './src/screens/Registration2';
import Registration1 from './src/screens/Registration1';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Registration1: {screen: Registration1},
  Registration2: {screen: Registration2},
  Profile: {screen: Profile}
});

const App = createAppContainer(MainNavigator);

export default App;
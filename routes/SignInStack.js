import { CreateStackNavigator } from 'react-navigation-stack';
import { CreateAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Registration1 from '../screens/Registration1';
import Registration2 from '../screens/Registration2';
import Profile from '../screens/Profile';

const screens = {
    Login: {
        screen: Login
    },
    Registration1: {
        screen: Registration1
    },
    Registration2: {
        screen: Registration2
    },
    Profile: {
        screen: Profile
    }
}

const SignInStack = CreateStackNavigator(screens);

export default CreateAppContainer(SignInStack);

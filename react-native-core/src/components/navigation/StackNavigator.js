import { createStackNavigator,createAppContainer } from 'react-navigation';
import Signup from "../Signup";
import Navigator from "../3dNavigator/Navigator";
import Login from "../Login";

const RootStack = createStackNavigator(
    {
        Navigator: { screen: Navigator,navigationOptions: {header: null,}},
        Signup: { screen: Signup,navigationOptions: {header: null,}},
        Login: { screen: Login,navigationOptions: {header: null,}},

    },

    {
        initialRouteName: 'Navigator',
    },

    {
        headerMode: 'screen'
    }

);



const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;
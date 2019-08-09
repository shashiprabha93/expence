import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthHandler from './AuthHandler';
import Auth from './AuthNavigator';
import Stack from './StackNavigator';


export default createAppContainer( // eslint-disable-line
  createSwitchNavigator(
    {
      Stack,
      Auth,
      AuthHandler,
      // AppNav
    },
    {
      initialRouteName: 'AuthHandler',
    },
  ),
); // eslint-disable-line

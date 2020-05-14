import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, YellowBox } from 'react-native';

import Register from './app/components/Register';
import Login from './app/components/Login';
import MenteApr from './app/components/MenteApr';
import MentePair from './app/components/MentePair';
import MenteChat from './app/components/MenteChat';

import { createSwitchNavigator, createAppContainer} from 'react-navigation';


const App = createSwitchNavigator({
   
  Register: { screen: Register},
  Login: { screen: Login },
  MenteApr: {screen: MenteApr},
  MentePair: { screen: MentePair},
  MenteChat: { screen: MenteChat}
});
export default createAppContainer(App);
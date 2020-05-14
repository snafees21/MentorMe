import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Register from './app/Components/Register';

 const Stack = createStackNavigator()

export default class Routes extends React.Component {
  
  render(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
}
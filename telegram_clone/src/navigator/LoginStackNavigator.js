
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();
const LoginStackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={{headerShown:false}} component={Login}/>
        <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default LoginStackNavigator;

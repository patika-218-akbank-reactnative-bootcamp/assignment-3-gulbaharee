
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import UserProvider from '../providers/UserProvider';
import Chat from '../pages/Chat';

const Stack = createNativeStackNavigator();
const LoginStackNavigator = () => {

  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator>
          <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
          <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
          <Stack.Screen name='Chat' options={{ headerShown: false }} component={Chat} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};


export default LoginStackNavigator;

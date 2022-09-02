
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import UserProvider from '../providers/UserProvider';
import Chat from '../pages/Chat';
import Theme from '../pages/Theme';
import UpdateSetting from '../pages/UpdateSetting';

const Stack = createNativeStackNavigator();
const LoginStackNavigator = () => {

  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator>
          <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
          <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
          <Stack.Screen name='Chat' options={{ headerShown: false }} component={Chat} />
          <Stack.Screen name='Theme' component={Theme} />
          <Stack.Screen name='UpdateSetting' component={UpdateSetting} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};


export default LoginStackNavigator;

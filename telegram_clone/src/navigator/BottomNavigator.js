import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactList from '../pages/ContactList';
import Setting from '../pages/Setting';
import MessageList from '../pages/MessageList';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="MessageList" options={{title:"Chats"}} component={MessageList}/>
            <Tab.Screen name="ContactList" options={{title:"Contacts"}} component={ContactList}/>
            <Tab.Screen name="Setting" options={{title:"Settings"}} component={Setting}/>
        </Tab.Navigator>
    )
}

export default BottomNavigator;
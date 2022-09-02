import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactList from '../pages/ContactList';
import Setting from '../pages/Setting';
import MessageList from '../pages/MessageList';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ContactList"
                options={{
                    title: "Contacts",
                    headerLeft: () => <Button title='Sort' style={{ color: 'rgb(0, 136, 204)' }} />,
                    headerRight: () => <Icon name="plus" size={20} style={{ marginRight: 20, color: 'rgb(0, 136, 204)' }} />
                }} component={ContactList} />
            <Tab.Screen name="MessageList" options={{ title: "Chats" }} component={MessageList} />
            <Tab.Screen name="Setting" options={{ title: "Settings" }} component={Setting} />
        </Tab.Navigator>
    )
}

export default BottomNavigator;
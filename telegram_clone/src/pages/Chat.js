import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChatHeader from '../components/ChatHeader';
import SendMessage from '../components/SendMessage';


const Chat = ({route}) => {

    const {id,name,uri}=route.params;

    return (
        <View style={styles.container}>
            <ChatHeader name={name}/>
            <View style={{height:650}}></View>
            <SendMessage id={id}/>
        </View>
    )
}

export default Chat;

const styles=StyleSheet.create(
    {
        container:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
        }
    }
)
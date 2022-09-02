import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native';
import { contactList } from '../assets/contactList';
import Contact from '../components/Contact';
import { useNavigation } from '@react-navigation/native';

const ContactList = () => {
    const { navigate } = useNavigation();

    const goChat=(id,name)=>{
        navigate('Chat',{id,name})
    }
    return (
        <View>
            <ScrollView>
                {contactList.map(contact =>
                    <Pressable onPress={()=>{goChat(contact.id,contact.name)}}>
                        <Contact id={contact.id} name={contact.name} />
                    </Pressable>
                )}
            </ScrollView>
        </View>
    )
}


export default ContactList;

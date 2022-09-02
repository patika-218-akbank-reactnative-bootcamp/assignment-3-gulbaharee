import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native';
import { contactList } from '../assets/contactList';
import Contact from '../components/Contact';

const ContactList = () => {
    return (
        <View>
            <ScrollView>
                {contactList.map(contact =>
                    <Pressable>
                        <Contact id={contact.id} name={contact.name} />
                    </Pressable>
                )}
            </ScrollView>
        </View>
    )
}


export default ContactList;

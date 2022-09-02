import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native';
import { contactList } from '../assets/contactList';

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

const Contact = ({ id, name }) => {
    return (<View key={id}>
        <View style={styles.contactContainer}>
            <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.userImage} />
            <View style={styles.contacts}>
                <Text style={styles.contact}>{name}</Text>
            </View>
        </View>
        <View style={styles.border} />
    </View>)
}

export default ContactList;

const styles = StyleSheet.create(
    {
        contactContainer: {
            display:"flex",
            flexDirection:"row",
            margin:5,
        },
        contacts: {
        },
        contact: {
            marginLeft:10,
            
        },
        border: {
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
            width: 300,
            marginLeft: 45,
        },
        userImage: {
            width: 35,
            height: 35,
            justifyContent: "center",
            borderRadius: 50,
        }

    }
)
import React,{useContext} from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native';
import { contactList } from '../assets/contactList';
import Contact from '../components/Contact';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../contexts/theme';


const ContactList = () => {
    const { navigate } = useNavigation();
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);
    
    const goChat=(id,name)=>{
        navigate('Chat',{id,name})
    }
    return (
        <View style={[styles.page,{backgroundColor: theme.backgroundColor}]}>
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

const styles=StyleSheet.create(
    {
        page:{height:1000,}
    }
)
import React,{useContext} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from '../contexts/theme';

const Contact = ({ id, name ,uri}) => {
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);
    return (<View key={id}>
        <View style={styles.contactContainer}>
            <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.userImage} />
            <View style={styles.contacts}>
                <Text style={[styles.contact,{color:theme.color}]}>{name}</Text>
            </View>
        </View>
        <View style={styles.border} />
    </View>)
}

export default Contact;

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